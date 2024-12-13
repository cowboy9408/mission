import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BookProvider } from "./context/BookContext"; 
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import AddBook from "./components/AddBook";

const App = () => {
  return (
    // BookProvider로 전체 앱을 감싸서 하위 컴포넌트에서 컨텍스트에 접근 가능
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </Router>
    </BookProvider>
  );
};

export default App;
