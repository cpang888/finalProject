import React from "react";
import "./SignUp.css";


export const SignUpInput = (props) => {
    return (
     <div className="uk-margin">
        <div className="uk-inline">
            <input className="uk-input input" type="text" {...props} />
        </div>
    </div>

    )
};