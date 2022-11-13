import React, { useState } from "react";
import { Toaster } from 'react-hot-toast';
import { linkValidator, notifyURL } from "../util/validator";
import "./Start.css";

function Start(props) {
    const [url, setUrl] = useState('');

    const handleClick = () => {
        let validate = linkValidator(url);
        if (validate) {
            props.onClick();
            props.onChange(url);
        } else {
            notifyURL();
        }
    }

    const updateLink = (e) => {
        setUrl(e.target.value);
    }

    return (
        <>
            <div className="center">
                <h1>Moi!</h1>
                <p>Feed me a link and I'll make it short for you.</p>
                <input type="text" id="input-link" name="link" placeholder="https://www.kaninverkko.fi/kanit/hattara.html" onChange={updateLink} />
                <input type="submit" id="g-button" name="generate" value="Generate" onClick={handleClick} />
                <Toaster position="top-left" />
            </div>
        </>
    )
}

export default Start;