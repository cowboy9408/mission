import axios from "axios"; 

const API_BASE_URL = "http://localhost:3000/api"; // API의 기본 URL

// 책 데이터를 가져오는 함수
export const fetchBooks = async () => {
  const response = await axios.get(`${API_BASE_URL}/books`); // GET 요청으로 모든 책 데이터 가져옴
  return response.data; // 서버에서 받은 데이터를 반환
};

// 새로운 책 데이터를 추가하는 함수
export const addBook = async (book) => {
  const response = await axios.post(`${API_BASE_URL}/books`, book); // POST 요청으로 책 데이터 추가
  return response.data; // 서버에서 반환된 새 책 데이터를 반환
};

// 책 데이터를 수정하는 함수
export const updateBook = async (id, updatedBook) => {
  const response = await axios.put(`${API_BASE_URL}/books/${id}`, updatedBook); // PUT 요청으로 책 데이터 업데이트
  return response.data; // 서버에서 반환된 업데이트된 책 데이터를 반환
};

// 책 데이터를 삭제하는 함수
export const deleteBook = async (id) => {
  await axios.delete(`${API_BASE_URL}/books/${id}`); // DELETE 요청으로 책 데이터 삭제
};
