import { useState, useMemo } from "react";

export const useBookList = (books, removeBook) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  const handleDelete = async (id) => {
    await removeBook(id);
    alert("책 삭제가 완료되었습니다.");
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // 검색 시 항상 첫 페이지로 초기화
  };

  // 검색 필터링
  const filteredBooks = useMemo(() => {
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [books, searchTerm]);

  // 현재 페이지 데이터 계산
  const currentBooks = useMemo(() => {
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    return filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  }, [filteredBooks, currentPage, booksPerPage]);

  return {
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    currentBooks,
    filteredBooks,
    booksPerPage,
    handleDelete,
    handleSearch,
  };
};
