import axios from "axios";

export default {
  // Deletes the coffee with the given id
  deleteCoffee: function(id) {
    return axios.delete("/api/coffees/" + id);
  },
  // Saves a coffee to the database
  saveReview: function(data) {
    console.log("API saveReview method running with data ", data);
    return axios.post("/api/reviews/", data)
      .then(function (response) {
      console.log(response);
      })
      .catch(function (error) {
      console.log(error);
      }); 
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Authenticates a user
  authenticateUser: function(userData) {
    console.log('login');
    return axios.post("/auth/login", userData);
  },
  // Sign up a user
  signUp: function(userData) {
    console.log('signup');
    return axios.post("/auth/signup", userData);
  },
  // Gets all coffees

  getCoffees: function() {
    return axios.get("/api/coffees");
  },
  searchCoffees: function(search) {
    console.log('searchCoffees: ');
    console.log(search.value);
    return axios.get("/api/coffees/search/" + search.value);
  },
  // Gets coffee detail
  getCoffee: function(id) {
    console.log('getCoffee: ' + id);
    return axios.get("/api/coffees/" + id);
  },
  // Gets all reviews for the current user
  getReviewsByUser: function(userId) { // pass in userId
    console.log("getReviewsByUser executing with userId", userId);
    return axios.get("/api/reviews/user/" + userId); // + userId
  },
  // Gets all reviews for the selected product
  getReviewsByCoffeeId: function(id) {
    console.log('getReviewsByCoffeeId: ' + id);
    return axios.get("/api/reviews/" + id);
  },

  getReviews: function() {
    return axios.get("/api/reviews/");
  }

  // Gets all reviews for the current user
  // getReviewsByUser: function(userId) {
  //   return axios.get("/api/reviews/user/", userId);
  // },
};
