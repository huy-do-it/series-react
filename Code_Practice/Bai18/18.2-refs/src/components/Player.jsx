import { useState, useRef } from "react";

export default function Player() {
    const playerNameRef = useRef();
    const [enterPlayerName, setEnterPlayerName] = useState(null);
    // const [submitted, setSubmitted] = useState(false);

    // function handleChange(event) {
    //     setSubmitted(false);
    //     setEnterPlayerName(event.target.value);
    // }

    function handleClick() {
        // setSubmitted(true);
        setEnterPlayerName(enterPlayerName.current.value);
    }

    return(
        <section id="player">
            <h2>Welcome {playerNameRef.current ?   playerNameRef.current.value : "No name"}</h2>
            <div>
                <input type="text" ref={playerNameRef}/>
                <button onClick={handleClick}>Set Name</button>
            </div>
        </section>
    );
}
