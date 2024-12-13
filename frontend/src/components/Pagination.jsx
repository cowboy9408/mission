import React from "react";
import { Container, PageButton } from "../style/PaginationStyle";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Container>
      {Array.from({ length: totalPages }, (_, index) => (
        <PageButton
          key={index}
          onClick={() => onPageChange(index + 1)}
          isActive={currentPage === index + 1}
        >
          {index + 1}
        </PageButton>
      ))}
    </Container>
  );
};

export default Pagination;
