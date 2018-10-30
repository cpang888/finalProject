import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { H1, H3, H4 } from '../../components/Headings';
// import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import { Col, Row, Container, SmallCard } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";
import {ListView} from "../../components/UserPageCards";

class UserPage extends Component {

  state = {
    reviews: [],//array of results returned from api
  };

  componentDidMount() {
    this.getReviews();
  }

  //function to get all coffee
  getReviews = () => {
    console.log("getReviews executing");
    // console.log("req.session.id", req);
    API
      // .getReviewsByUser("5bcb3df1f0cf16368cf781bd") // To Do: pass in userId variable here once we get 
      .getReviews()
      .then(res => {
        // console.log("res:", res);
        console.log("res.data:", res.data);
        this.setState({ reviews: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav />
        <Container>

          <Row>
            <Col size="md-12">
              <div className="uk-text-center">
                <H1>My Coffee Reviews</H1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col size="lg-12 sm-12 md-12">
              <ListView reviews={this.state.reviews}/>
            </Col>
          </Row>

        </Container>
      </div>
    )
  }

}

export default UserPage;