import React from "react";
// import "./SignUp.css";

export const SubmitBtn = (props) => {
    return (
        <button 
            className="uk-button uk-button-default"
            disabled={props.disabled}
        >
        Submit
        </button>
    )
};