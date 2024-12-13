import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #edf2f7, #d6e0f0);
  min-height: 94vh;
`;

export const Title = styled.h1`
  font-size: 28px; /* 크기를 줄여서 레이아웃 조정 */
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  position: relative;
  top: 40px;
`;

export const AddButton = styled.button`
  background-color: #6c5ce7;
  color: white;
  padding: 10px 15px; /* 크기 조정 */
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
  position: relative;
  top: 70px;
  left:320px;

  &:hover {
    background-color: #4c42e2;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 200px)); /* 카드 크기 고정 */
  gap: 15px;
  width: 100%;
  max-width: 1200px;
  justify-content: center; /* 내용이 중앙에 정렬되도록 설정 */
  align-content: start; /* 내용이 위쪽부터 채워지도록 설정 */
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 축소 */
  padding: 15px; /* 카드 내부 간격 조정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* 부드러운 애니메이션 */
  }
`;

export const BookTitle = styled.h3`
  font-size: 16px; /* 텍스트 크기 축소 */
  font-weight: bold;
  color: #34495e;
  text-align: center;
  margin-bottom: 8px;
`;

export const BookDetail = styled.p`
  font-size: 12px; /* 세부 텍스트 크기 축소 */
  color: #7f8c8d;
  margin-bottom: 6px;
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 6px 10px; /* 버튼 크기 축소 */
  border: none;
  border-radius: 6px;
  font-size: 12px; /* 텍스트 크기 축소 */
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;
