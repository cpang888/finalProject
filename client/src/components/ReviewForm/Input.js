import React from "react";
// import "./SignUp.css";

export const Input = (props) => {
    return (
     <div className="uk-margin">
        <div className="uk-inline">
            <input className="uk-input input" {...props} />
        </div>
    </div>

    )
};