import { useRef, useState } from "react";
import ResultModel from "./ResultModel";

export default function TimeStopper({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    const [timerStart, setTimerStart] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            // setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);

        setTimerStart(true);
    }
    function handleStop() {
        clearTimeout(timer.current);
        setTimerStart(false);
    }

    return (
        <>
            <ResultModel ref={dialog} targetTime={targetTime} result={timerExpired ? "lost" : "won"} />
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>Bạn đã thua!!</p>}
                <p className="challenge-time">{targetTime} seconds{targetTime > 1 ? "s" : ""}</p>
                <button onClick={timerStart ? handleStop : handleStart}>{timerStart ? "Stop" : "Start"}</button>
                <p className={timerStart ? "active" : undefined}>{timerStart ? "Time is running..." : "Timer inactive"}</p>
            </section>
        </>
    );
}