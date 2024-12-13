import React from "react";
import { Container, Input } from "../style/SearchBarStyle";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="제목 또는 저자를 입력하세요."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;
