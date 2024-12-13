import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 97vh;
  padding: 10px; /* 패딩을 줄여 스크롤 여유 확보 */
  background: linear-gradient(135deg, #edf2f7, #d6e0f0);
`;

export const Title = styled.h1`
  font-size: 30px; /* 크기 감소 */
  color: #2c3e50;
  margin-bottom: 30px; /* 아래 간격 축소 */
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px; /* 간격 줄이기 */
  text-transform: capitalize;
  position: relative;
  bottom:20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px; /* 요소 간 간격 축소 */
  background: white;
  padding: 30px; /* 패딩 축소 */
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 90%; /* 화면 너비를 유연하게 */
  max-width: 450px; /* 최대 너비를 줄임 */
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; /* 라벨과 입력 필드 간 간격 축소 */
`;

export const Label = styled.label`
  font-size: 14px; /* 크기 감소 */
  color: #34495e;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px; /* 입력 필드 패딩 축소 */
  border: 1px solid #dce1e6;
  border-radius: 6px;
  background-color: #f7f9fc;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 4px 10px rgba(108, 92, 231, 0.15);
    background-color: #ffffff;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px; /* 입력 필드 패딩 축소 */
  border: 1px solid #dce1e6;
  border-radius: 6px;
  background-color: #f7f9fc;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 4px 10px rgba(108, 92, 231, 0.15);
    background-color: #ffffff;
  }
`;

export const ImagePreview = styled.img`
  width: 120px; /* 크기 축소 */
  height: 120px; /* 크기 축소 */
  margin-top: 15px;
  border-radius: 8px;
  border: 2px solid #e4e7eb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  background-color: ${(props) => (props.cancel ? "#e74c3c" : "#6c5ce7")};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px; /* 둥근 모서리 */
  font-size: 14px; /* 폰트 크기 축소 */
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => (props.cancel ? "#c0392b" : "#4c42e2")};
    transform: scale(1.02); /* 살짝 확대 */
  }

  &:active {
    transform: scale(0.98);
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
