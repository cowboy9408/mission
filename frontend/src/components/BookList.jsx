import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import {
  Container,
  Title,
  AddButton,
  GridContainer,
  Card,
  BookTitle,
  BookDetail,
  DeleteButton,
} from "../style/BookListStyle";
import { useBookList } from "../hooks/useBookList";

const BookList = () => {
  const { books, removeBook } = useContext(BookContext);
  const navigate = useNavigate();

  const {
    searchTerm,
    handleSearch,
    currentPage,
    setCurrentPage,
    currentBooks,
    handleDelete,
    filteredBooks,
    booksPerPage,
  } = useBookList(books, removeBook);

  return (
    <Container>
      <Title>책 목록</Title>
      <AddButton onClick={() => navigate("/add")}>책 추가</AddButton>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <GridContainer>
        {currentBooks.map((book) => (
          <Card key={book.id}>
          <BookTitle onClick={() => navigate(`/books/${book.id}`)}>
          {book.title}
          </BookTitle>
            <BookDetail>저자: {book.author}</BookDetail>
            <BookDetail>수량: {book.quantity}</BookDetail>
            <DeleteButton onClick={() => handleDelete(book.id)}>
              삭제
            </DeleteButton>
          </Card>
        ))}
      </GridContainer>
      <Pagination
        totalItems={filteredBooks.length}
        itemsPerPage={booksPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

export default BookList;
