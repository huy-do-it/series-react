import { useRef } from "react";
import { useState } from "react";

export default function TimeStopper({ title, targetTime }) {
    const timer = useRef();
    const [timerStart, setTimerStart] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStart(true);
    }
    function handleStop() {
       clearTimeout(timer.current);
        setTimerStart(false);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>Time's up!</p>}
            <p className="challenge-time">{targetTime} seconds{targetTime > 1 ? "s" : ""}</p>
            <button onClick={timerStart ? handleStop : handleStart}>{timerStart ? "Stop" : "Start"}</button>
            <p className={timerStart ? "active" : undefined}>{timerStart ? "Time is running..." : "Timer inactive"}</p>
        </section>
    );
}