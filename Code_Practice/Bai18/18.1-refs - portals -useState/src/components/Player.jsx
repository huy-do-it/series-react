import { useState } from "react";

export default function Player() {
    const [enterPlayerName, setEnterPlayerName] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        setSubmitted(false);
        setEnterPlayerName(event.target.value);
    }

    function handleClick() {
        setSubmitted(true);
    }

    return(
        <section id="player">
            <h2>Welcome {submitted ? enterPlayerName : "No name"}</h2>
            <div>
                <input type="text" onChange={handleChange} value={enterPlayerName} />
                {console.log(enterPlayerName)}
                <button onClick={handleClick}>Set Name</button>
            </div>
        </section>
    );
}
