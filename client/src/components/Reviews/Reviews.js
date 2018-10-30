import React from "react";
import {StarRating} from "../StarRating"

export const Reviews = props => {
    return (
  
        // <div className="uk-card uk-card-default uk-grid-collapse  uk-child-width-1-2@s uk-margin card" uk-grid>
        //     <div className="uk-card-media-left uk-cover-container">
        //     <img src={props.image} uk-cover/>
        //     </div>

   <div className="uk-card uk-card-default uk-grid-collapse  uk-child-width-1-2@s uk-margin card" uk-grid>     
    <div>
        <div className="uk-card-body">
            <p className="uk-card-title">Title: {props.title}</p>
            <p className="uk-card-title">Brew Method: {props.brewMethod}</p>
            <p className="uk-card-title">Flavors: {props.flavors}</p>
            <p className="uk-card-title">Notes: {props.notes}</p>
            <p className="uk-card-title">Rating: <StarRating numStars={props.rating} /></p>
        </div>
    </div>
        </div>
    
    )
};


