import { useState, useMemo } from "react"; 

export const useBookList = (books, removeBook) => {
  // 책 리스트 관리를 위한 커스텀 훅
  const [searchTerm, setSearchTerm] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1); 
  const booksPerPage = 10; // 

  // 책 삭제 핸들러
  const handleDelete = async (id) => {
    await removeBook(id); 
    alert("책 삭제가 완료되었습니다."); 
  };

  // 검색어 변경 핸들러
  const handleSearch = (term) => {
    setSearchTerm(term); 
    setCurrentPage(1); 
  };

  // 검색 필터링 로직
  const filteredBooks = useMemo(() => {
    
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
  }, [books, searchTerm]); // books와 searchTerm 상태 변경 시 필터링 재계산

  // 현재 페이지에 표시할 책 데이터 계산
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
