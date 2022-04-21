import React from "react";
import "./Button.css";
const Button = (props) => {

    return(
        <div>
            <button className="btn">{props.title}</button>
        </div>
    )
}

export default Button;