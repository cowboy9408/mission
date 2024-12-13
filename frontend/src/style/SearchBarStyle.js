import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #dce1e6;
  border-radius: 8px;
  background-color: #f7f9fc;
  font-size: 14px;
  color: #2c3e50;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 10px rgba(108, 92, 231, 0.15);
    background-color: #ffffff;
  }

  &::placeholder {
    color: #95a5a6;
    font-style: italic; /* 세련된 느낌 */
  }
`;
