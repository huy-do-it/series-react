import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModel({ targetTime, ref, remainingTime, onReset }) {
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    const dialogRef = useRef();
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    });
    return createPortal(
        <dialog ref={dialogRef} className="result-modal">
            {/* <h2>You {result}</h2> */}
             {userLost && <h2>Bạn đã thua</h2>}
             {!userLost && <h2>Điểm số của bạn là: {score}</h2>}
            <p>
                Thời gian đích: <strong>{targetTime} seconds</strong>
            </p>
            <p>
                Bạn còn  <strong> {formattedRemainingTime} seconds</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>, document.getElementById("modal")
    );
}