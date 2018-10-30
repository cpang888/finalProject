import React from "react";
import "./CoffeeHeader.css";


export const CoffeeHeader = props => {
    return (
  
        <div className="uk-card uk-card-default uk-grid-collapse  uk-child-width-1-2@s uk-margin card" uk-grid>
            <div className="uk-card-media-left uk-cover-container">
            <img src={props.image} uk-cover/>
            </div>
        
    <div>
        <div className="uk-card-body">
            <h3 className="uk-card-title">{props.name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>
    </div>

    
    )
};