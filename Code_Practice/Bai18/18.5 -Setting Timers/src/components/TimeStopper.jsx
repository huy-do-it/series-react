import { useState } from "react";

export default function TimeStopper({ title, targetTime }) {
    const [timerStart, setTimerStart] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
        setTimerStart(true);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>Time's up!</p>}
            <p className="challenge-time">{targetTime} seconds{targetTime > 1 ? "s" : ""}</p>
            <button onClick={handleStart}>{timerStart ? "Stop" : "Start"}</button>
            <p className={timerStart ? "active" : undefined}>{timerStart ? "Time is running..." : "Timer inactive"}</p>
        </section>
    );
}