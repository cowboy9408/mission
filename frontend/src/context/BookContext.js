import React, { createContext, useState, useEffect } from "react";
import { fetchBooks, addBook, updateBook, deleteBook } from "../services/api";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // API에서 책 데이터를 가져옵니다.
  useEffect(() => {
    fetchBooks()
      .then(setBooks)
      .catch((err) => alert("Failed to fetch books: " + err.message));
  }, []);

  const addNewBook = async (book) => {
    try {
      const newBook = await addBook(book);
      setBooks((prevBooks) => [...prevBooks, newBook]);
    } catch (err) {
      alert("Failed to add book: " + err.message);
    }
  };

  const editBook = async (id, updatedBook) => {
    try {
      const book = await updateBook(id, updatedBook); // API에서 업데이트된 데이터 가져오기
      setBooks((prevBooks) =>
        prevBooks.map((b) => (b.id === id ? { ...b, ...book } : b)) // 상태 업데이트
      );
    } catch (err) {
      alert("Failed to update book: " + err.message);
    }
  };

  const removeBook = async (id) => {
    try {
      await deleteBook(id);
      setBooks((prevBooks) => prevBooks.filter((b) => b.id !== id));
    } catch (err) {
      alert("Failed to delete book: " + err.message);
    }
  };

  return (
    <BookContext.Provider value={{ books, addNewBook, editBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};
