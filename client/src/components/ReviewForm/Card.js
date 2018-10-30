import React from "react";
import "./Card.css";

export const Card = (props) => {
    return (
        <div class="uk-card uk-card-default uk-card-body card">
        <h3 class="uk-card-title">Write a Review</h3>
                {props.children}
        </div>

    )
};