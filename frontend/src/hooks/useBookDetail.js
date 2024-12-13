import { useState, useEffect } from "react"; 

export const useBookDetail = (books, id, editBook, navigate) => {
  // 책 상세 정보를 관리하는 커스텀 훅.
  const [editableBook, setEditableBook] = useState(null); 
  const [imageFile, setImageFile] = useState(null); 
  const [previewUrl, setPreviewUrl] = useState(""); 

  // 컴포넌트가 마운트되거나 books 또는 id가 변경될 때 실행
  useEffect(() => {
    const book = books.find((b) => b.id === parseInt(id, 10)); // ID에 해당하는 책 검색
    if (book) {
      setEditableBook({ ...book }); // 검색된 책 정보를 상태에 설정
      setPreviewUrl(book.image || ""); // 기존 이미지 URL 설정
    } else {
      alert("책 정보를 찾을 수 없습니다."); 
      navigate("/"); 
    }
  }, [books, id, navigate]);

  // 입력 값 변경 시 호출되는 핸들러.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableBook((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value, 10) || 0 : value, // 수량은 숫자로 변환.
    }));
  };

  // 이미지 파일 변경 시 호출되는 핸들러.
  const handleImageChange = (e) => {
    const file = e.target.files[0]; 
    if (file && file.type.startsWith("image/")) { // 이미지 파일인지 확인.
      setImageFile(file); 
      setPreviewUrl(URL.createObjectURL(file)); // 이미지 미리보기 URL 생성
    } else {
      alert("이미지 파일만 선택해주세요!"); 
    }
  };

  // 변경 사항 저장 시 호출되는 핸들러
  const handleSaveChanges = async () => {
    if (!editableBook) return;

    const confirmSave = window.confirm("정보를 수정하시겠습니까?"); 
    if (confirmSave) {
      const updatedBook = {
        ...editableBook,
        image: imageFile ? previewUrl : editableBook.image, // 수정된 이미지 URL 설정
      };

      await editBook(editableBook.id, updatedBook); // 컨텍스트를 통해 책 정보 업데이트

      alert("책 정보 수정이 완료되었습니다!");
      navigate(`/books/${editableBook.id}`); // 상세 페이지로 이동
    }
  };

  // 반환 값: 훅 외부에서 사용할 데이터와 함수
  return {
    editableBook, 
    previewUrl, 
    handleInputChange, 
    handleImageChange, 
    handleSaveChanges, 
  };
};
