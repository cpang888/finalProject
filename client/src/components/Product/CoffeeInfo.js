import React from "react";


export const CoffeeInfo = props => {
    return (
  
        // <div className="uk-card uk-card-default uk-grid-collapse  uk-child-width-1-2@s uk-margin card" uk-grid>
        //     <div className="uk-card-media-left uk-cover-container">
        //     <img src={props.image} uk-cover/>
        //     </div>

   <div className="uk-card uk-card-default uk-grid-collapse  uk-child-width-1-2@s uk-margin card" uk-grid>     
    <div>
        <div className="uk-card-body">
            <p className="uk-card-title">Brand: {props.brand}</p>
            <p className="uk-card-title">Origin: {props.Origin}</p>
            <p className="uk-card-title">Year Harvested: {props.yearHarvested}</p>
            <p className="uk-card-title">Price: {props.price}</p>
        </div>
    </div>
        </div>
    
    )
};


