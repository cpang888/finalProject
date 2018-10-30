var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var coffeeSchema = new Schema({
  brand: String,
  cname: String,
  roast: String,
  origin: String,
  yearHarvested: String,
  price: String,
  image: String,
  avgRating: Number
});
module.exports = mongoose.model('Coffee', coffeeSchema);