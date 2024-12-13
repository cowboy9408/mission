import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import {
  Container,
  Title,
  FormField,
  Label,
  Input,
  TextArea,
  ImagePreview,
  Button,
} from "../style/BookDetailStyle";
import { useBookDetail } from "../hooks/useBookDetail";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, editBook } = useContext(BookContext);

  const {
    editableBook,
    previewUrl,
    handleInputChange,
    handleImageChange,
    handleSaveChanges,
  } = useBookDetail(books, id, editBook, navigate);

  if (!editableBook) {
    return <div>로딩 중...</div>;
  }

  return (
    <Container>
      <Title>책 상세 페이지 및 수정</Title>
      <FormField>
        <Label>제목:</Label>
        <Input
          type="text"
          name="title"
          value={editableBook.title}
          onChange={handleInputChange}
        />
      </FormField>
      <FormField>
        <Label>저자:</Label>
        <Input
          type="text"
          name="author"
          value={editableBook.author}
          onChange={handleInputChange}
        />
      </FormField>
      <FormField>
        <Label>줄거리:</Label>
        <TextArea
          name="description"
          value={editableBook.description}
          onChange={handleInputChange}
        ></TextArea>
      </FormField>
      <FormField>
        <Label>수량:</Label>
        <Input
          type="number"
          name="quantity"
          value={editableBook.quantity}
          onChange={handleInputChange}
          min="0"
        />
      </FormField>
      <FormField>
        <Label>이미지:</Label>
        <Input type="file" accept="image/*" onChange={handleImageChange} />
      </FormField>
      {previewUrl && <ImagePreview src={previewUrl} alt="미리보기" />}
      <div>
        <Button onClick={handleSaveChanges}>수정 사항 저장</Button>
        <Button cancel onClick={() => navigate("/")}>
          돌아가기
        </Button>
      </div>
    </Container>
  );
};

export default BookDetail;
