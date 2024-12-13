import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import {
  Container,
  Title,
  Form,
  FormField,
  Label,
  Input,
  TextArea,
  ImagePreview,
  Button,
} from "../style/AddBookStyle";
import { useAddBook } from "../hooks/useAddBook";

const AddBook = () => {
  const { addNewBook } = useContext(BookContext);
  const navigate = useNavigate();

  const {
    form,
    previewUrl,
    handleChange,
    handleImageChange,
    handleSubmit,
  } = useAddBook(addNewBook, navigate);

  return (
    <Container>
      <Title>책 추가</Title>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label>책 제목:</Label>
          <Input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label>저자:</Label>
          <Input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label>줄거리:</Label>
          <TextArea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          ></TextArea>
        </FormField>
        <FormField>
          <Label>수량:</Label>
          <Input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            required
            min="0"
          />
        </FormField>
        <FormField>
          <Label>이미지:</Label>
          <Input type="file" accept="image/*" onChange={handleImageChange} required />
        </FormField>
        {previewUrl && <ImagePreview src={previewUrl} alt="Book Preview" />}
        <div>
          <Button type="submit">책 추가</Button>
          <Button cancel onClick={() => navigate("/")}>
            돌아가기
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddBook;
