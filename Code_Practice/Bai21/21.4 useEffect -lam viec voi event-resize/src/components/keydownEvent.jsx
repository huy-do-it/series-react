import { useEffect } from "react";

export default function KeydownEvent() {
    useEffect(() => {
        // Hàm xử lý sự kiện resize
        const handleKeydown = (event) => {
            console.log(event);
            if (event.key) {
               console.log(`Bạn đã nhấn phím: ${event.key}`);
            }
        };

        // Đăng ký sự kiện keydown
        window.addEventListener("keydown", handleKeydown);
        console.log("Đã add event keydown");

        // Cleanup function
        return () => {
            window.removeEventListener("keydown", handleKeydown);
            console.log("Đã remove sự kiện keydown");
        };
    }, []); // Chỉ chạy một lần 

    return (
        <>
            <h3>Nhấn phím bất kỳ để xem console log</h3>
        </>
    );

}