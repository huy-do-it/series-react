import { useState, useEffect } from "react";

export default function DemoNoDeps() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Chạy useEffect sau mỗi lần render lại");
}); // Không có dependency
    return (
        <>  
            <h3>Không truyển Dependency</h3>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <p>Giá trị: {count}</p>
            {console.log("Render lại component giao diện")}
        </>
    )
}