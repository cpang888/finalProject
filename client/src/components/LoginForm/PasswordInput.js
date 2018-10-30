import React from "react";
import "./Login.css";


export const PasswordInput = (props) => {
    return (
        <div className="uk-margin">
        <div className="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input className="uk-input input" type="text" {...props} />
        </div>
        </div>
    );
}