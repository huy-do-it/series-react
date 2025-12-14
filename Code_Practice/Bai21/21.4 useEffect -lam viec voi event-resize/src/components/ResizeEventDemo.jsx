import { useEffect } from "react";

export default function ResizeEventDemo() {
    useEffect(() => {
        // Hàm xử lý sự kiện resize
        const handleResize = () => {
            if (window.innerWidth <= 800) {
                console.log("Cửa sổ nhỏ hơn 800px");
            } else {
                console.log("Cửa sổ lớn hơn hoặc bằng 800px");
            }
        };

        // Đăng ký sự kiện resize
        window.addEventListener("resize", handleResize);
        console.log("Đã add sự kiện resize");

        // Cleanup function
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Đã gỡ bỏ sự kiện resize");
        };
    }, []); // Chỉ chạy một lần 

    return (
        <>
            <h3>Resize cửa sổ nhỏ hơn 800px để xem console log</h3>
        </>
    );

}