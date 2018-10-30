import React from "react";
import "./StarRatingInput.css";

export const StarRatingInput = (props) => {
    return (
        <div className="rating">
                <label>
                <input type="radio" name="rating" value="1" {...props} />
                <span className="icon">★</span>
            </label>
            <label>
                <input type="radio" name="rating" value="2" {...props}/>
                <span className="icon">★</span>
                <span className="icon">★</span>
            </label>
            <label>
                <input type="radio" name="rating" value="3" {...props}/>
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>   
            </label>
            <label>
                <input type="radio" name="rating" value="4" {...props}/>
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
            </label>
            <label>
                <input type="radio" name="rating" value="5" {...props}/>
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
                <span className="icon">★</span>
            </label>
        </div>
    )
};