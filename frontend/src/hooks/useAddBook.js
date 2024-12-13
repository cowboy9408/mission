import { useState } from "react";

export const useAddBook = (addNewBook, navigate) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    quantity: 0,
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "quantity" ? parseInt(value) || 0 : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed!");
        return;
      }
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert("책의 이미지를 설정해주세요.!");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("author", form.author);
    formData.append("description", form.description);
    formData.append("quantity", form.quantity);
    formData.append("image", imageFile);

    try {
      await addNewBook(formData); // FormData 지원 API 호출
      alert("책 추가 성공");
      navigate("/");
    } catch (error) {
      alert("책 추가 실패!: " + error.message);
    }
  };

  return {
    form,
    previewUrl,
    handleChange,
    handleImageChange,
    handleSubmit,
  };
};
