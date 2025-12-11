import { useImperativeHandle, useRef } from "react";

export default function ResultModel({ result, targetTime, ref }) {
    const dialogRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    });
    return (
        <dialog ref={dialogRef} className="result-modal">
            <h2>You {result}</h2>
            <p>
                Thời gian đích: <strong>{targetTime} seconds</strong>
            </p>
            <p>
                Bạn còn  <strong> X seconds</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}