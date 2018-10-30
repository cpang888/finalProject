import React from 'react';
import "./SmallCard.css";
import API from "../../utils/API";
import {StarRating} from "../StarRating"

// getCoffeeDetail = (coffee) => {
//     //creating new article object
//     let newArticle = {
//       cname: coffee.name
//     }

//     console.log("*** coffee : " + coffee);

//     //calling the API
//     API
//       .getCoffeeDetail(newArticle)
//       .then(results => {
//         //removing the saved article from the results in state
//         // let unsavedArticles = this.state.results.filter(article => article.headline.main !== newArticle.title)
//         // this.setState({results: unsavedArticles})
//       })
//       .catch(err => console.log(err));
//   }

export const SmallCard = props => {
    return (
        <div className="allCards">
    <div className="uk-card uk-card-default uk-card-small uk-card-body smallCard uk-inline-clip uk-transition-toggle"  tabindex="0">

                <img className="image" src={props.image} alt="coffee image"></img>
                <h2 className="coffeeName uk-position-center">{(props.name).toUpperCase()}</h2>
                {/* <p className="uk-card-title">{props.brand}</p> */}
                {/* <p className="uk-card-title">{props.roast}</p> */}
                <p className="uk-card-title averageRating uk-position-center">
                    <StarRating numStars={props.rating} />
                </p>
                {/* <p className="uk-card-title origin uk-position-center">{props.Origin}</p> */}
                {/* <p className="uk-card-title price uk-position-center">{props.price}</p> */}


            <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default overlay">
                <p class=" uk-margin-remove price">Price: {props.price}</p>
                {/* <span class="uk-margin-small-right" uk-icon="location"></span> */}
                <p class="uk-margin-remove origin">Origin: {props.Origin}</p>
            </div>
            </div>
            </div>


    );
}

// export const SmallCard = () => {
//     return (
//     <div>
//         <div>
//             <div className={"uk-card uk-card-default uk-card-small uk-card-body smallCard"}>
//                 <h3 className="uk-card-title">Insert Coffee Data</h3>
//             </div>
            
//         </div>
//     </div>
// );
// }





