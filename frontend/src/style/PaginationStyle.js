import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const PageButton = styled.button`
  margin: 0 5px;
  padding: 10px 15px; /* 크기 조정 */
  font-size: 14px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  background-color: ${(props) => (props.isActive ? "#6c5ce7" : "#f0f0f0")};
  color: ${(props) => (props.isActive ? "white" : "#2c3e50")};
  border: ${(props) => (props.isActive ? "none" : "1px solid #dce1e6")};
  border-radius: 8px; /* 부드러운 모서리 */
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#4c42e2" : "#e0e0e0")};
    transform: scale(1.05); /* 약간의 확대 효과 */
  }

  &:active {
    transform: scale(0.95); /* 클릭 시 축소 */
  }
`;
