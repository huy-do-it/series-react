import { useState, useEffect } from "react";

export default function DemoEmptyDeps() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Chạy useEffect sau mỗi lần render lại");
        { console.log("Bắt đầu fetch API") };
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => console.log(data));
        { console.log("Chường trình đã chạy qua fetch API") };
    }, []); // Không có dependency
    return (
        <>
            <h3>Không truyển Dependency</h3>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <p>Giá trị: {count}</p>
            {console.log("Render lại component giao diện")}
        </>
    )
}