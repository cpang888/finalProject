import React from 'react';
import "./LargeCard.css";

export const LargeCard = (props) => {
    return (
    <div>
        <div>
            <div className="uk-card uk-card-default uk-card-large uk-card-body uk-postion-center largeCard">
            <img class="coffeeBeanImage" src={require("./../assets/nathan-dumlao-471723-unsplash.jpg")} alt="coffee beans"/>
                <h3 className="uk-card-title title">BEAN ADVOCATE</h3>
                {props.children}     
            </div>
        </div>
    </div>
);
}




