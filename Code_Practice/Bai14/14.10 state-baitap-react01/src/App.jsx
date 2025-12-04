import { useState } from 'react'
import './App.css'

function App() {
  const [grerting, setGreeting] = useState("Hello my friend!")

  function updateGreeting() {
    //setGreeting("Hi, chào bạn!")
    const currentTime = 5; // Lấy thời gian hiện tại (giờ)
    if(currentTime >= 5 && currentTime < 12) {
      setGreeting("Chào buổi sáng!")
  }else if(currentTime >= 12 && currentTime < 18) {
      setGreeting("Chào buổi chiều!")
  }else {
      setGreeting("Chào buổi tối!")
  }
  }
  return (
    <>
     <p>{grerting}</p>
     <button onClick={updateGreeting}>Cập nhật lời chào</button>
    </>
  )
}

export default App
