![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=ByeongjunKim&fontSize=90)
<h3 align="center"> 👋 Hi! nice to see you! </h3>
<p align="center">
I'm a Frontend Web Developer. 
  <br>🌱
  이번에 과제로 온라인 서점의 간단한 기능을 구현해보았습니다.
  아래는 과제에 사용한 스킬들과 툴입니다.
</p>

### 💪 사용 스킬들
<div style= "display: flex">
  <img src ="https://img.shields.io/badge/-HTML5-orange?&style=for-the-badge&logo=HTML5&logoColor=white" style= "height: auto; margin-left: 10px; margin-right :    10px"/>
<img src ="https://img.shields.io/badge/-CSS3-9cf?&style=for-the-badge&logo=CSS3&logoColor=white" style= "height: auto; margin-left: 10px; margin-right : 10px"/>
<img src ="https://img.shields.io/badge/-JavaScript-F7DF1E?&style=for-the-badge&logo=JavaScript&logoColor=white" style= "height: auto; margin-left: 10px; margin-right : 10px"/>
<img src ="https://img.shields.io/badge/-React-61DAFB?&style=for-the-badge&logo=React&logoColor=white" style= "height: auto; margin-left: 10px; margin-right : 10px"/>
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
 <img src ="https://img.shields.io/badge/-styled--components-ff96b4?&style=for-the-badge&logo=styled-components&logoColor=white" style= "height: auto; margin-left: 10px; margin-right : 10px"/> 
</div>

### ⚙️ TOOLS
<div style= "display: flex">
  <img src ="https://img.shields.io/badge/-Git-F05032?&style=for-the-badge&logo=Git&logoColor=white" style= "height: auto; margin-left: 10px; margin-right : 10px"/>
    <img src ="https://img.shields.io/badge/-Visual Studio Code-007ACC?&style=for-the-badge&logo=Visual Studio Code&logoColor=white" style= "height: auto; margin-left: 10px; margin-right : 10px"/>
</div>

### 과제 설명
프론트엔드로는 React.js를 사용하였고, 백엔드에는 Node.js를 사용했습니다.<br>
React.js에서는 Context API와 Styled-Component를 이용하여 상태 관리와 디자인을 관리하였습니다. <br>
또 hooks 폴더를 따로 만들어 use훅을 관리함으로써 코드의 유지보수성과 가독성을 강화하였습니다.<br>
폴더 구성은 component / hooks / services / context / style  로 구성되어 있습니다.<br>
책 목록에 페이지네이션 적용 (한 페이지당 10개 항목)을 하였고, 제목과 저자로 필터링할 수 있는 검색 기능 구현과 책 추가 / 제거 및 수량 조절 기능을 구현했습니다.<br>
책 추가 같은 경우 페이지를 하나 더 만들어서 구현했고, 수량 조절은 상세 페이지에서 조절하고 수정할 수 있게끔 구현했습니다. 그리고 추가로 책 이미지를 삽입하고 이를 수정할수 있게끔 구현했습니다.<br>
api.js에서는 서버와 통신하는 axios를 통합해서 관리하게끔 코드를 작성하였습니다.<br>
Node.js로는 Express.js를 사용해 서버를 구축하였고, RESTful api를 사용해 책 목록 조회/ 상세 정보 조회/ 추가 /수정 / 삭제를 설계하고 구현하였습니다.<br>
DB는 본래 MongoDB를 이용하려고 했으나 네트워크 문제나 몇가지 이슈들로 인해 Cluster나 Compass와 연결이 도저히 안되어서 목업 데이터를 사용하여 본 과제를 진행하였습니다.<br>
해당 데이터는 루트 디렉터리에 books.json 이라는 파일로 관리하고 있습니다.<br>
배포는 프론트엔드는 vercel로 하였고, 백엔드는 render로 하였습니다. <br>

### 실행 방법
github에 각 폴더에서 클론 코드를 다운 받습니다. 그리고 각각 npm install 명령어로 해당 코드들의 모듈이 설치될수 있도록 합니다. <br>
백엔드는 node app.js 로 서버가 동작합니다. 프론트엔드는 터미널에 npm start를 입력하면 됩니다.<br>
그리고 배포된 웹 애플리케이션의 링크는 https://mission-rihaubrhi-byeongjunkims-projects.vercel.app/ 입니다.<br>
