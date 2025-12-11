import { useState, useRef } from "react";

export default function Player() {
    const playerNameRef = useRef();
    const [enterPlayerName, setEnterPlayerName] = useState("");
    // const [submitted, setSubmitted] = useState(false);

    // function handleChange(event) {
    //     setSubmitted(false);
    //     setEnterPlayerName(event.target.value);
    // }

    function handleClick() {
        // setSubmitted(true);
        setEnterPlayerName(playerNameRef.current.value);
    }

    return(
        <section id="player">
            <h2>Welcome {enterPlayerName ?? "No name"}</h2>
            <div>
                <input type="text" ref={playerNameRef}/>
                <button onClick={handleClick}>Set Name</button>
            </div>
        </section>
    );
}
