import React, { Component } from "react";
import API from "../../utils/API";
import Auth from "../../utils/Auth";
import { Col, Row, Container, LargeCard } from "../../components/Grid";
import { SignUpInput, SignUpBtn } from "../../components/SignUp";


class SignUp extends Component {
    state = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      errorMessage: null
    };
  
    componentDidMount() {
    
    }
  
    authenticate = () => {
      const userData = {
        username: this.state.username,
        password: this.state.password
      };
      // console.log(userData);
      // console.log('After authenticate');
      API.authenticateUser(userData)
        .then(res => {
          // clear error message
          this.setState({ errorMessage: null });
          Auth.authenticateUser(res.data.token);
  
          // hard redirect to / to reload all the state and nav
          window.location.href = "/";
        })
        .catch(err => this.setState({ errorMessage: err.response.data.message }));
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    signUp = () => {
      const userData = {
        username: this.state.username,
        // email: this.state.email,
        password: this.state.password
      };
      // console.log(userData);
      API.signUp(userData)
        .then(res => {
          // clear error message
          this.setState({ errorMessage: null });
  
          // authenticate the user after successful sign up
          this.authenticate();
        })
        .catch(err => this.setState({ errorMessage: err.response.data.message }));
    };

    handleFocus = event => {
      event.target.select();
    };
  
    handleSignup = event => {
      event.preventDefault();
      if (this.state.username && this.state.password && this.state.password.length >= 6) {
        this.signUp();
      } else {
        this.setState({ errorMessage: "Please enter valid username and password to sign in."})
      }
    };
  
    render() {
      return (
        <div className="background5">
        <Container fluid>
            <Row>
                <Col size="sm-1 md-1 lg-1" /> 
                <Col size="sm-10 md-10 lg-10">
        <LargeCard>
          <form className="form">
          <h4>Sign Up</h4>
            {/* <h1 className="h4 mb-3 font-weight-normal">Please login</h1> */}
            {/* <label htmlFor="username" className="sr-only">email</label> */}
            <SignUpInput
              value={this.state.first_name}
              onChange={this.handleInputChange}
              onFocus={this.handleFocus}
              name="first_name"
              placeholder="First Name"
              required=""
            />
             <SignUpInput
              value={this.state.last_name}
              onChange={this.handleInputChange}
              onFocus={this.handleFocus}
              name="last_name"
              placeholder="Last Name"
              required=""
            />
            <SignUpInput
              value={this.state.username}
              onChange={this.handleInputChange}
              onFocus={this.handleFocus}
              name="username"
              placeholder="Username"
              required=""
              autoFocus={true}
            />
            {/* <label htmlFor="password" className="sr-only">Password</label> */}
            <SignUpInput
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              type="password"
              placeholder="Password"
              required=""
            />

            <div className="checkbox mb-3 text-danger">
              {this.state.errorMessage}
            </div>
            <div className="mb-3">
              <SignUpBtn
                disabled={!(this.state.username && this.state.password && this.state.password.length >= 6)}
                onClick={this.handleSignup}
              ></SignUpBtn>
            </div>
          </form>

            </LargeCard>

          </Col>
          <Col size="sm-1 md-1 lg-1" /> 
          </Row>
        </Container>
        </div>
      );
    }
  }
  export default SignUp;


