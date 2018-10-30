import React, { Component } from "react";
import API from "../../utils/API";
import Auth from "../../utils/Auth";
import { Link } from "react-router-dom";
import { Col, Row, Container, LargeCard } from "../../components/Grid";
// import { Input } from "../../components/Form";
import { LoginInput, LoginBtn, PasswordInput } from "../../components/LoginForm";
import "./style.css";


class Login extends Component {
    state = {
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
  
    handleFocus = event => {
      event.target.select();
    };
  
    handleLogin = event => {
      event.preventDefault();
      if (this.state.username && this.state.password && this.state.password.length >= 6) {
        this.authenticate();
      } else {
        this.setState({ errorMessage: "Please enter valid username and password to sign in."})
      }
    };
  
    render() {
      return (
        <div className="background1">
        <Container fluid>
            <Row>
                <Col size="sm-1 md-1 lg-1" /> 
                <Col size="sm-10 md-10 lg-10">
              
        <LargeCard>
          <form className="login_form">
            {/* <h1 className="h4 mb-3 font-weight-normal">Please login</h1> */}
            {/* <label htmlFor="username" className="sr-only">email</label> */}
        
            <LoginInput
              value={this.state.username}
              onChange={this.handleInputChange}
              onFocus={this.handleFocus}
              name="username"
              placeholder="Username"
              required=""
              autoFocus={true}
            />
            {/* <label htmlFor="password" className="sr-only">Password</label> */}
            <PasswordInput
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              type="password"
              placeholder="Password"
              required=""
            />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <div className="checkbox mb-3 text-danger">
              {this.state.errorMessage}
            </div>
  
              <LoginBtn
                disabled={!(this.state.username && this.state.password && this.state.password.length >= 6)}
                onClick={this.handleLogin} href="/home"
              ></LoginBtn>

            <p className="signupbtn">
              Don't have an account?&nbsp;&nbsp;
              <Link to={"/signup"}>Sign Up</Link>
            </p>
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
  export default Login;



// import React from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";

// const NoMatch = () => (
//   <Container fluid>
//     <Row>
//       <Col size="md-12">
//         <Jumbotron>
//           <h1>404 Page Not Found</h1>
//           <h1>
//             <span role="img" aria-label="Face With Rolling Eyes Emoji">
//               🙄
//             </span>
//           </h1>
//         </Jumbotron>
//       </Col>
//     </Row>
//   </Container>
// );

// export default NoMatch;