import React, { Component } from 'react';
import Auth from '../../utils/Auth';
import "./Nav.css";
import {FormBtn} from "../../components/Form";
import API from "../../utils/API";

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    // this.props.onSearch(event.target.value);
  }

  // onSearch() {
  //   this.props.s
  // }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    if (this.state.value) {
      console.log(this.state.value);
      API.searchCoffees({
        value: this.state.value
      })
      .then(results => {
        console.log(results);
        this.props.onSearch(results);
      })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <nav className="uk-navbar-container" uk-navbar="uk-navbar">

        <div className="uk-navbar-left navbar-logo">
          <a href="/">Bean Advocate</a>
        </div>

        <div className="uk-navbar-item uk-navbar-center">
          <form action="javascript:void(0)" className="uk-search uk-search-navbar inline-form" onSubmit={this.handleSubmit}>
            <span uk-icon="search" className="search-icon"></span>
            <input className="uk-search-input" type="search" placeholder="Search coffee reviews by name/brand..." onChange={this.handleChange}/>
          </form>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">

            {this.state.authenticated ? (
              <React.Fragment>
              <li>
                <a href="/review">
                  <span className="uk-icon uk-margin-small-right" uk-icon="plus-circle"></span>
                  Write a Review
                </a>
              </li>
              <li>
                <a href="/">
                  {/* To do: Use conditional rendering to replace icon with user's profile pic */}
                  <span className="uk-icon uk-margin-small-right" uk-icon="user"></span>
                  [Username]
                </a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li><a href="/user">My Reviews</a></li>
                    <li><a href="/logout">Log out</a></li>
                  </ul>
                </div>
              </li> 
              </React.Fragment>
            ) : (

                <React.Fragment>
                  <li>
                    <a href="/login">
                      <span className="uk-icon uk-margin-small-right" uk-icon="sign-in"></span>
                      Log in
                  </a>
                  </li>

                  <li>
                    <a href="/signup">
                      <span className="uk-icon uk-margin-small-right" uk-icon="plus-circle"></span>
                      Sign up
                  </a>
                  </li>
                </React.Fragment>
              )}

          </ul>

        </div>
      </nav>

    )
  }
}

export default Nav;