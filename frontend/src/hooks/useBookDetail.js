import { useState, useEffect } from "react";

export const useBookDetail = (books, id, editBook, navigate) => {
  const [editableBook, setEditableBook] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    const book = books.find((b) => b.id === parseInt(id, 10));
    if (book) {
      setEditableBook({ ...book });
      setPreviewUrl(book.image || ""); // 기존 이미지 설정
    } else {
      alert("책 정보를 찾을 수 없습니다.");
      navigate("/"); // 정보가 없으면 메인 페이지로 이동
    }
  }, [books, id, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableBook((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value, 10) || 0 : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // 이미지 미리보기 설정
    } else {
      alert("이미지 파일만 선택해주세요!");
    }
  };

  const handleSaveChanges = async () => {
    if (!editableBook) return;
  
    const confirmSave = window.confirm("정보를 수정하시겠습니까?");
    if (confirmSave) {
      const updatedBook = {
        ...editableBook,
        image: imageFile ? previewUrl : editableBook.image, // 수정된 이미지 URL
      };
  
      await editBook(editableBook.id, updatedBook); // 컨텍스트 상태 업데이트
  
      alert("책 정보 수정이 완료되었습니다!");
      navigate(`/books/${editableBook.id}`); // 상세 페이지로 이동
    }
  };

  return {
    editableBook,
    previewUrl,
    handleInputChange,
    handleImageChange,
    handleSaveChanges,
  };
};
