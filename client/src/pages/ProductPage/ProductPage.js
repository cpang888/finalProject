import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { CoffeeHeader, CoffeeInfo } from "../../components/Product";
import { Reviews } from "../../components/Reviews";

class ProductPage extends React.Component {

  state = {
    results: [],//array of results returned from api
    product: {},
    reviews: [],
    noResults: false,//boolean used as flag for conditional rendering
  };

    componentDidMount() {
    console.log("THIS.PROPS", this.props.match.params.id);
    API
      .getCoffee(this.props.match.params.id)
      .then(results => {
        let product = results.data;
        console.log(product);
        this.setState({ product: results.data })
      }
      )
      .catch(err => console.log(err));
      console.log('outside of getCoffee api call');

    API
      .getReviewsByCoffeeId(this.props.match.params.id)
      .then(results => {
        let reviews = results.data;
        console.log("reviews ***");
        console.log(reviews);
        this.setState({ reviews: results.data })
      }
      )
      .catch(err => console.log(err));
      console.log('outside of getReviews api call');
  }

  render() {
    return (
      <div className="background3">
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-12">

            {
               <CoffeeHeader
                 image={this.state.product.image}
                 name={this.state.product.cname}
               />
            }

            {
              <CoffeeInfo 
                brand={this.state.product.brand}
                Origin={this.state.product.Origin}
                roast={this.state.product.roast}
                yearHarvested={this.state.product.yearHarvested}
                price={this.state.product.price}
              
              />
            }
            {
               this.state.reviews.map((review, i) => (
                <Reviews 
                  title={review.title}
                  brewMethod={review.brewMethod}
                  flavors={review.flavors}
                  notes={review.notes}
                  rating={review.rating}
                
                />
               ))
            }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductPage;