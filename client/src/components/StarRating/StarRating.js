import React from 'react';
import "./StarRating.css";

export const StarRating = props => {

    if (props.numStars) {
        let array = [];
        let filledStar = <i className="fas fa-star filledStar"></i>;
        let emptyStar = <i className="far fa-star"></i>;
        for (let i=0; i<props.numStars; i++) {
            array.push(filledStar);
        }
        for (let i=0; i<5-props.numStars; i++) {
            array.push(emptyStar);
        }
        return(
            <span>
                {array}
            </span>
        );

    } else {
        return (<span>No reviews yet</span>)
    }
    
}