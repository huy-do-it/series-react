import { useImperativeHandle, useRef } from "react";

export default function ResultModel({ targetTime, ref, remainingTime, onReset }) {
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
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
            {/* <h2>You {result}</h2> */}
            <h2>Bạn {userLost ? "đã thua" : "chiến thắng"}</h2>
            <p>
                Thời gian đích: <strong>{targetTime} seconds</strong>
            </p>
            <p>
                Bạn còn  <strong> {formattedRemainingTime} seconds</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
}