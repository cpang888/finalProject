import React from "react";
// import Auth from './utils/Auth';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Logout from "./components/Logout";
import Home from "./pages/Home";
// import ProductPage from "./pages/ProductPage/ProductPage";
import ProductPage from "./pages/ProductPage";
import ReviewForm from "./pages/ReviewForm";
import UserPage from "./pages/UserPage";
import NotFound from "./components/NotFound";



// import {Sidebar} from "./components/Sidebar";

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       Auth.isUserAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//     }
//   />
// );

// Private Routes are good to go uncomment when we get close to deployment
const PrivateRoute = (props) => {
  const Component = props.component;
  const path = props.path; 

  const isUserAuthenticated = true; // TO DO: Add correct logic here

  return (
    isUserAuthenticated === true ? <Route path= {path} component= {Component} /> : <Redirect to="/login"/>
  
  )
};

const App = () =>
  <Router>
    <div>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="/coffee" component={Home} />         */}
        <PrivateRoute exact path="/coffees/:id" component={ProductPage} />
        <PrivateRoute exact path="/product" component={ProductPage}/>
        <PrivateRoute exact path="/review" component={ReviewForm}/>
        <PrivateRoute exact path="/user" component={UserPage}/>
        <PrivateRoute exact path="/logout" component={Logout}/>
        <Route exact path="" component="" />
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>;


 export default App;