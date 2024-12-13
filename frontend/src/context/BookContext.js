import React, { createContext, useState, useEffect } from "react"; 
import { fetchBooks, addBook, updateBook, deleteBook } from "../services/api"; 

// 책 데이터를 공유하기 위한 Context 생성.
export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]); // 책 데이터를 상태로 관리.

  // 컴포넌트가 마운트될 때 API에서 책 데이터를 가져옴
  useEffect(() => {
    fetchBooks()
      .then(setBooks) // 책 데이터를 상태에 설정.
      .catch((err) => alert("책 데이터 가져오기 실패!: " + err.message)); // 에러 발생 시 알림 표시.
  }, []);

  // 새로운 책을 추가하는 함수.
  const addNewBook = async (book) => {
    try {
      const newBook = await addBook(book); // API를 통해 새로운 책 추가.
      setBooks((prevBooks) => [...prevBooks, newBook]); // 상태에 새 책 추가.
    } catch (err) {
      alert("책 추가하기 실패!: " + err.message); // 에러 발생 시 알림 표시.
    }
  };

  // 기존 책 데이터를 수정하는 함수.
  const editBook = async (id, updatedBook) => {
    try {
      const book = await updateBook(id, updatedBook); // API에서 업데이트된 책 데이터 가져오기.
      setBooks((prevBooks) =>
        prevBooks.map((b) => (b.id === id ? { ...b, ...book } : b)) // 수정된 책 데이터로 상태 업데이트.
      );
    } catch (err) {
      alert("책 수정하기 실패!: " + err.message); // 에러 발생 시 알림 표시.
    }
  };

  // 책 데이터를 삭제하는 함수.
  const removeBook = async (id) => {
    try {
      await deleteBook(id); // API를 통해 책 데이터 삭제.
      setBooks((prevBooks) => prevBooks.filter((b) => b.id !== id)); // 상태에서 해당 책 제거.
    } catch (err) {
      alert("책 삭제하기 실패!: " + err.message); // 에러 발생 시 알림 표시.
    }
  };

  // BookContext를 제공하여 하위 컴포넌트들이 상태와 함수들을 사용할 수 있도록 설정.
  return (
    <BookContext.Provider value={{ books, addNewBook, editBook, removeBook }}>
      {children} {/* 하위 컴포넌트 렌더링 */}
    </BookContext.Provider>
  );
};
