import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Input, SubmitBtn, Card, TextArea } from "../../components/ReviewForm";
import { List, ListItem } from "../../components/List";
import "./ReviewForm.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { StarRatingInput } from "../../components/ReviewForm/StarRatingInput";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],//array of results returned from api
            noResults: false,//boolean used as flag for conditional rendering
            name: "",  // coffee ObjectId
            title: "",
            rating: "",
            brewMethod: "",
            flavors: "",
            notes: "",
            coffees: []
        }
        this._onSelectCoffee = this._onSelectCoffee.bind(this);
        this._onSelectBrewMethod = this._onSelectBrewMethod.bind(this);
    
    }

        _onSelectCoffee (option) {
            this.setState({selectedCoffee: option});
            
            // set name = coffeeId
            this.state.coffees.forEach( coffee => { //this can be optimized by breaking out once correctt value is found (need to use loop instead of foreach)
                if (coffee.cname == option.value) {
                    this.setState({name: coffee._id});
                }
            })
        }

        _onSelectBrewMethod (option) {
            this.setState({brewMethod: option.value});
        }
        
   
    componentDidMount () {
        this.getCoffees();
    }

    getCoffees = () => {
        //calling the API
        API.getCoffees()
        .then(res => {
         this.setState({ coffees: res.data})
        })
        .catch(err => console.log(err));
    };
    
    // I Don't think this is doing anything? -Mark
    //   function to get all reviews
      getReviews = () => { 
        //calling the API
        API.getReviews()
        .then(res =>
          this.setState({ results: res.data, selectedCoffee: "", rating: "", brewMethod: "", flavors: "", notes: ""})
        )
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        console.log(event.target)
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();

      // the only non-required field is 'flavors'
      if (this.state.name && this.state.rating && this.state.brewMethod && this.state.notes && this.state.title) {
        API.saveReview({
          name: this.state.name,
          title: this.state.title,
          rating: this.state.rating,
          brewMethod: this.state.brewMethod,
          flavors: this.state.flavors,
          notes: this.state.notes

        })
          .then( () => window.location.assign("/coffees/" + this.state.name)) // I tried to use res.redirect in the reviewController create method, but it didn't work. Was getting a 404 error even though the page exists.
          .catch(err => console.log(err));
      }
    };


    render() {
        const defaultOption = this.state.selectedCoffee; 
        return (
        
            <div className="background4">
                <Nav />
                <Container fluid>
                    <Row>
                    <Col size="sm-2 md-2 lg-2"></Col>
                        <Col size="sm-8 md-8 lg-8">
                       
                  <Card>
                        <form onSubmit={this.handleFormSubmit}>
                           
                    <span className="uk-text-middle">Coffee Name</span>
                    <Dropdown 
                        options={this.state.coffees.map(coffee => { return {value: coffee.cname, label: coffee.brand + " - " + coffee.cname} })} 
                        onChange={this._onSelectCoffee} 
                        name="name" 
                        value={this.state.selectedCoffee}
                    />

                    <span className="uk-text-middle">Brew Method</span>
                    <Dropdown options={["French Press", "Pour Over/Drip", "AeroPress", "Moka Pot", "Siphon"]} onChange={this._onSelectBrewMethod} name="brewMethod" value={this.state.brewMethod}/>

                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="title"
                                    placeholder="Title"
                                    type="text"
                                />

                                 <TextArea 
                                    value={this.state.notes}
                                    onChange={this.handleInputChange}
                                    name="notes"
                                    placeholder="Tasting notes"
                                    type="text"
                                />
                                 <Input
                                    value={this.state.flavors}
                                    onChange={this.handleInputChange}
                                    name="flavors"
                                    placeholder="Flavors"
                                    type="text"
                                />

                    <br></br>
                    <span className="uk-text-middle">My Rating</span>
                    <br></br>
                    
                    <StarRatingInput 
                        onChange={this.handleInputChange}
                    />
                    <br></br>
                    <br></br>
                    
                        
                        {/* the only non-required field is 'flavors */}
                        <SubmitBtn
                             onClick={this.handleFormSubmit}
                             disabled={!(this.state.name && this.state.rating && this.state.notes && this.state.brewMethod && this.state.title)}
                        />
                            </form> 

                        </Card>
                        </Col>
                   
                        <Col size="sm-2 md-2 lg-2"> </Col>

                    </Row>
                </Container>

            </div>
  
        );
    }
}




export default ReviewForm;











