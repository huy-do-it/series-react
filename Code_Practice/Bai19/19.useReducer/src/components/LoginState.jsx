import { useState } from 'react'

export default function LoginState() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <h2>{isLogin ? "Bạn đã đăng nhập" : "Bạn chưa đăng nhập"}</h2>
      <button onClick={() => setIsLogin(true)}>Đăng nhập</button>
      <button onClick={() => setIsLogin(false)}>Đăng Xuất</button>
    </>
  )
}