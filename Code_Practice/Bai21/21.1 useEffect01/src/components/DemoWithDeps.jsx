import { useState, useEffect } from "react";

export default function DemoWithDeps() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Chạy useEffect sau mỗi lần count đổi lại", count);
}, [count]); // Có dependency là count
    return (
        <>  
            <h3>Không truyển Dependency</h3>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <p>Giá trị: {count}</p>
            {console.log("Render lại component giao diện")}
        </>
    )
}