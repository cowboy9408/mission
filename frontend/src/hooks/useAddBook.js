import { useState } from "react"; 

export const useAddBook = (addNewBook, navigate) => {
  // 책 추가 기능을 관리하는 커스텀 훅.
  const [form, setForm] = useState({
    title: "", 
    author: "", 
    description: "", 
    quantity: 0, 
  });
  const [imageFile, setImageFile] = useState(null); // 업로드된 이미지 파일 상태.
  const [previewUrl, setPreviewUrl] = useState(""); // 업로드된 이미지 미리보기 URL 상태.

  // 폼 입력 값이 변경될 때 호출되는 핸들러.
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setForm({
      ...form,
      [name]: name === "quantity" ? parseInt(value) || 0 : value, // 수량 입력값은 숫자로 변환.
    });
  };

  // 이미지 파일이 변경될 때 호출되는 핸들러.
  const handleImageChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      if (!file.type.startsWith("image/")) { // 파일이 이미지인지 확인.
        alert("이미지 파일만 선택해주세요!"); 
        return;
      }
      setImageFile(file); // 이미지 파일 상태 설정.
      setPreviewUrl(URL.createObjectURL(file)); // 브라우저에서 이미지 미리보기 URL 생성.
    }
  };

  // 폼 제출 시 호출되는 핸들러.
  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지.
    if (!imageFile) {
      alert("책의 이미지를 설정해주세요.!"); 
      return;
    }

    const formData = new FormData(); // FormData 객체 생성.
    formData.append("title", form.title); 
    formData.append("author", form.author); 
    formData.append("description", form.description); 
    formData.append("quantity", form.quantity); 
    formData.append("image", imageFile); 

    try {
      await addNewBook(formData); // FormData를 사용해 책 추가 API 호출.
      alert("책 추가 성공"); 
      navigate("/"); 
    } catch (error) {
      alert("책 추가 실패!: " + error.message); // 
    }
  };

  // 훅에서 반환할 데이터와 함수들.
  return {
    form, 
    previewUrl, 
    handleChange, 
    handleImageChange, 
    handleSubmit, 
  };
};
