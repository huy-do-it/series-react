import { useState } from 'react'
import './App.css'

function App() {
  console.log('App rendered');
  const [playerName, setPlayerName] = useState('player 1')
  // hàm xử lý sự kiện onChange hay hàm người dùng nhập liệu
  const handleOnChange = (e) => {
    setPlayerName(e.target.value) // cập nhật lại state playerName
  }
  return (
    <>
    {/* sự kiện onChange xảy ra khi người dùng nhập liệu vào input */}
      <h2>Nhập tên người chơi</h2>
      <input type="text" value={playerName} onChange={handleOnChange}/>
      <p>Bạn đã nhập tên: {playerName}</p>
    </>
  )
}

export default App
