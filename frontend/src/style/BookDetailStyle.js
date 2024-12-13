import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 중앙에서 위쪽으로 이동 */
  min-height: 97vh; /* 화면 높이의 90%로 설정 */
  padding: 10px; /* 기존 20px에서 축소 */
  background: linear-gradient(135deg, #edf2f7, #d6e0f0);
`;

export const Title = styled.h1`
  font-size: 28px; /* 기존 32px에서 축소 */
  color: #2c3e50;
  margin-bottom: 20px; /* 기존 30px에서 축소 */
  font-weight: bold;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: capitalize;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; /* 기존 10px에서 축소 */
  margin-bottom: 10px; /* 기존 15px에서 축소 */
  width: 100%;
  max-width: 450px; /* 최대 너비를 약간 줄임 */
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #34495e;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px; /* 기존 10px에서 축소 */
  border: 1px solid #dce1e6;
  border-radius: 6px; /* 기존 8px에서 축소 */
  background-color: #f7f9fc;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 5px rgba(108, 92, 231, 0.1); /* 그림자 축소 */
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-height: 100px; /* 최대 높이 제한 */
  padding: 8px; /* 기존 10px에서 축소 */
  border: 1px solid #dce1e6;
  border-radius: 6px;
  background-color: #f7f9fc;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 5px rgba(108, 92, 231, 0.1); /* 그림자 축소 */
  }
`;

export const ImagePreview = styled.img`
  width: 120px;
  height: 100px;
  margin-top: 20px;
  border-radius: 10px;
  border: 3px solid #e4e7eb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  top:10px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.cancel ? "#e74c3c" : "#6c5ce7")};
  color: white;
  padding: 8px 16px; /* 기존 12px 20px에서 축소 */
  border: none;
  border-radius: 6px; /* 기존 8px에서 축소 */
  font-size: 14px; /* 기존 16px에서 축소 */
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  top:50px;

  &:hover {
    background-color: ${(props) => (props.cancel ? "#c0392b" : "#4c42e2")};
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.98);
  }

  &:not(:last-child) {
    margin-right: 8px; /* 간격 축소 */
  }
`;
