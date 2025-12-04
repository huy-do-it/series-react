import './App.css'

function Header() {
  return (
    <>
      <h2> chào mừng đến với thế giới React </h2>
      <p>
        Hôm nay là <strong>11/30/2025</strong>. Thời gian hiện tại{" "} <strong>14:40</strong>
      </p>
    </>
  );
}

function App() {
  return (
    //fragment <> </>
    <>
      <h1> Đây là ứng dụng React cơ bản </h1>
      <p> Hello React Basic Application </p>
      <Header/>
    </>
  )
}

export default App
