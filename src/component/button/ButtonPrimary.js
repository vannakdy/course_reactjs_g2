import React from "react";
import "./Button.css";
const ButtonPrimary = (props) => {

    return(
        <div>
            <button className="btn_primary">{props.title}</button>
        </div>
    )
}

export default ButtonPrimary;