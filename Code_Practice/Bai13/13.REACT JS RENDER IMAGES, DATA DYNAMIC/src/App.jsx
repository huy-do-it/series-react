import './App.css'
import demoPic from "../src/assets/img/2022-Hyundai-Kona-Electric-SUV.png"

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const welcome = ["Hello everyone! Welcome to ReactJS", "Chào mọi người! Chào mừng đến với ReactJS", "ReactJS is awesome!", "ReactJS thật tuyệt vời!"];

function ranDomTitle() {
  return Math.floor(Math.random() * welcome.length);
}

function Hello() {
  const title = welcome[ranDomTitle()];
  return (
    <>
      <h1>{title}</h1>
      <p>Hôm nay là: <strong>{today}</strong>. Thời gian hiện tại: <strong>{time}</strong></p>
    </>
  );
}

const name = "Huy";
let isLogedIn = false; // giả sử người dùng đã đăng nhập
let person = {
  name: "Huy",
  age: 25,
  isLogedIn: true
};
function DinamicValue() {
  return (
    <>
      {/*1. dùng để chèn **biểu thức** JavaScript (expression) */}
      <h2>chào {name}!</h2>
      <p>Kết quả là: {1 + 1 * 9}</p>
      {/*2. không chèn **câu lệnh** (statement) */}
      {/* <p>{if(true){"đúng"}}</p> */}
      {/*3. kết hợp với toán tử điều kiện(toán tử ternary) JSX ko hỗ trợ trực tiếp 'if-else', nhưng có thể dùng toán tử ternary */}
      <p>{isLogedIn ? "Đã đăng nhập" : "Chưa đăng nhập"}</p>

      <p>Tên {person.name}, tuổi {person.age}</p>

      {/* 5. chèn hình ảnh vào thẻ img */}
      <img src={demoPic} alt="React Logo" width="200" />
    </>
  )
}

function App() {
  return (
    <>
      <Hello />
      <DinamicValue />
    </>
  )
}

export default App
