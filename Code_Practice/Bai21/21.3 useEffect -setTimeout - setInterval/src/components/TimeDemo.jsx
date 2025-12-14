import { useState, useEffect } from "react";
export default function TimeDemo() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            console.log("Timeout được gọi");
            setCount((prevCount) => prevCount + 1);
        }, 2000);
        // Cleanup function (optional)
        return () => {
            console.log("Component unmounted, cleanup if necessary");
            clearTimeout(timeOutId);
        }

    }, [count]); // Chỉ chạy một lần khi component được render lần đầu

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         console.log("Interval được gọi");
    //         setCount((prevCount) => prevCount + 1);
    //     }, 1000);
    //     // Cleanup function (optional)
    //     return () => {
    //         console.log("Component unmounted, cleanup if necessary");
    //         clearInterval(intervalId);
    //     }

    // }, []); // Chỉ chạy một lần khi component được render lần đầu
    return (
        <>
            <h3>Mount | Unmount để thử</h3>
            <p>Count: {count}</p>
        </>
    );
}