import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { H1, H3, H4 } from '../../components/Headings';
import { Col, Row, Container, SmallCard } from "../../components/Grid";
import Nav from "../../components/Nav";
import "./Home.css";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],//array of results returned from api
      noResults: false//boolean used as flag for conditional rendering
    };
  }

  componentDidMount() {
    this.getCoffees();
  }

  //function to get all coffee
  getCoffees = () => {

    //calling the API
    API
      .getCoffees()
      .then(results => {
        let allCoffee = results.data;
        this.setState({ results: allCoffee })

        console.log(allCoffee);
      })
      .catch(err => console.log(err));
  };

  onSearch = (results) => {
    this.setState({
      results: results.data
    });
  }

  render() {
    return (
      <div className="background">
        <Nav 
          onSearch={this.onSearch}/>
       
        <Container fluid>
          <Row>
            <Col size="lg-2 sm-2 md-2">

              <Sidebar
              />
            </Col>
            <Col size="lg-10 sm-10 md-10">
              { 
                this.state.results.map((coffee, i) => (
                  <Link to={"/coffees/" + coffee._id}>      
                  <SmallCard class="smallCard"
                    key={i}
                    image={coffee.image}
                    name={coffee.cname}
                    brand={coffee.brand}
                    Origin={coffee.Origin}
                    rating={coffee.avgRating}// roast={coffee.roast}
                    // yearHarvested={coffee.yearHarvested}
                    price={coffee.price}
                  />
                   </Link>
                )
                )
               
              }

            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}

export default Home;