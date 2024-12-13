const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer'); 
const path = require('path'); 
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware 설정
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer 설정 (이미지 업로드용)
const upload = multer({ dest: 'uploads/' });

// 목업 데이터 파일 경로
const DATA_FILE = path.join(__dirname, 'books.json');

// 데이터 로드 함수
const loadData = () => {
  if (fs.existsSync(DATA_FILE)) {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  }
  return [
    {
      id: 1,
      title: "리액트",
      author: "김병준",
      description: "리액트의 기초를 배우다!",
      quantity: 5,
      image: "https://via.placeholder.com/150?text=React+Basics",
    },
    {
      id: 2,
      title: "노드",
      author: "김병준",
      description: "노드의 기초를 배우다!",
      quantity: 2,
      image: "https://via.placeholder.com/150?text=Learn+Node.js",
    },
  ];
};

// 데이터 저장 함수
const saveData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// 초기 데이터 로드
let books = loadData();

// API 엔드포인트 설정

// 1. 책 목록 가져오기
app.get('/api/books', (req, res) => {
  res.json(books);
});

// 2. 특정 책 정보 가져오기
app.get('/api/books/:id', (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).send({ message: '책을 찾을 수 없습니다!' });
  }
});

// 3. 책 추가
app.post('/api/books', upload.single('image'), (req, res) => {
  const { title, author, description, quantity } = req.body;

  if (!req.file) {
    return res.status(400).send({ message: '이미지 파일이 필요합니다!' });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    description,
    quantity: parseInt(quantity, 10),
    image: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`, // 절대 경로로 설정
  };

  books.push(newBook);
  saveData(books); // 데이터 저장
  res.status(201).json(newBook);
});

// 4. 책 수정
app.put('/api/books/:id', upload.single('image'), (req, res) => {
  const { title, author, description, quantity } = req.body;
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));

  if (bookIndex === -1) {
    return res.status(404).send({ message: '책을 찾을 수 없습니다!' });
  }

  const updatedBook = {
    ...books[bookIndex],
    title: title || books[bookIndex].title,
    author: author || books[bookIndex].author,
    description: description || books[bookIndex].description,
    quantity: quantity ? parseInt(quantity, 10) : books[bookIndex].quantity,
    image: req.file
      ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
      : books[bookIndex].image, // 새 파일 없으면 기존 경로 유지
  };

  books[bookIndex] = updatedBook;
  saveData(books); // 데이터 저장
  res.json(updatedBook); // 수정된 데이터 반환
});

// 5. 책 삭제
app.delete('/api/books/:id', (req, res) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));

  if (bookIndex === -1) {
    return res.status(404).send({ message: '책을 찾을 수 없습니다!' });
  }

  books.splice(bookIndex, 1);
  saveData(books); // 데이터 저장
  res.sendStatus(204);
});

// 6. 초기화
app.post('/api/reset', (req, res) => {
  books = loadData();
  saveData(books); // 데이터를 초기 목업 데이터로 다시 저장
  res.status(200).send({ message: '데이터가 초기화되었습니다!' });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버 동작! http://localhost:${PORT}`);
});
