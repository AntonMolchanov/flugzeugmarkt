import React from "react";
import './Button.scss'

function Button(props) {
    let button = props
    const {onClick, backgroundColor, text} = button

    return (
        <button
            className="btn"
            style={{backgroundColor: backgroundColor}}
            onClick={(event)=>onClick(event)}>
            {text}
        </button>
    );
}

export default Button;
