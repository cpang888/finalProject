import React from "react";
import "./Login.css";


export const LoginInput = (props) => {
    return (
     <div className="uk-margin">
        <div className="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input className="uk-input input" type="text" {...props} />
        </div>
    </div>

    )
};
