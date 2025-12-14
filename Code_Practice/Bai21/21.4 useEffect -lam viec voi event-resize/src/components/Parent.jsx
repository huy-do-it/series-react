import { useState } from "react";
import ResizeEventDemo from "./ResizeEventDemo";
import KeydownEvent from "./keydownEvent";
export default function Parent() {
    const [show, setShow] = useState(true);

    return (
        <>
            <button onClick={() => setShow(!show)}>{show ? "Ẩn" : "Hiện"}</button>
            {/* {show && <ResizeEventDemo />} */}
            {show && <KeydownEvent />}
        </>
    );
}