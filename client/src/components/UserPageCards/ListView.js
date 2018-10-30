import React from 'react';
import "./ListView.css";
import {StarRating} from "../../components/StarRating"

export const ListView = props => {

    function createViewReviewButton(review) {
        let test="test";
        let button = <div className="viewReviewButtonContainer">
            <button className="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle={`target: #modal-${review._id}`}>My Notes</button>
        </div>;
        return (button);    
    }

    function createViewReviewModal(review) {
        let modal = <div id={`modal-${review._id}`} uk-modal="true">
            <div className="uk-modal-dialog uk-modal-body">
                <div class="uk-modal-header uk-text-center">
                    <h2 className="noMarginHeaders">{review.name[0].brand} {review.name[0].cname}</h2>
                    <h3 className="noMarginHeaders">{review.title}</h3>
                </div>
                <p><strong>My rating: </strong><StarRating numStars={review.rating}/></p>
                <p><strong>Brew method: </strong>{review.brewMethod}</p>
                <p><strong>Flavors: </strong>{review.flavors}</p>
                <p><strong>Notes: </strong>{review.notes}</p>
                <p className="uk-text-right">
                    <button className="uk-button uk-button-default uk-modal-close" type="button">Back</button>
                </p>
            </div>
        </div>

        return(modal)
    }
    
    return (
        <div>
            <table className="uk-table uk-table-hover uk-table-divider">
                <thead>
                    <tr>
                        <th>Coffee Name</th>
                        <th>My Rating</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {props.reviews.map( (review, i) => {
                        return (
                            <tr>
                                <td>{review.name[0].brand + " " + review.name[0].cname}</td>
                                <td><StarRating numStars={review.rating} /></td>
                                <td>{createViewReviewButton(review)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {props.reviews.map( (review, i) => {
                return (
                    createViewReviewModal(review)
                )
            })}
        </div>
        
        
    );
}