import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const fetchBooks = async () => {
  const response = await axios.get(`${API_BASE_URL}/books`);
  return response.data;
};

export const addBook = async (book) => {
  const response = await axios.post(`${API_BASE_URL}/books`, book);
  return response.data;
};

export const updateBook = async (id, updatedBook) => {
  const response = await axios.put(`${API_BASE_URL}/books/${id}`, updatedBook);
  return response.data;
};

export const deleteBook = async (id) => {
  await axios.delete(`${API_BASE_URL}/books/${id}`);
};
