const mongoose = require("mongoose");
const db = require("../models");
const ObjectId = require('mongodb').ObjectID;
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/beanadvocate",
  { useNewUrlParser: true }
);

// const userSeed = [
//   {
//     _id: ObjectId("5bcb3df1f0cf16368cf781bd"),
// 	  name: "Mark",
//     email: "mark1@gmail.com",
//     // firstName: "Mark",
// 	  // lastName: "Jackson",
// 	  password: "Mark@123"
//   },
//   {
//     _id: ObjectId("5bcb3df1f0cf16368cf781be"),
//     name: "Danielle",
//     email: "danielle1@gmail.com",
//   //   firstName: "Danielle",
// 	// lastName: "Garcia",
// 	  passwordh: "Danielle@123"
//   },
//   {
//     _id: ObjectId("5bcb3df1f0cf16368cf781bf"),
//     name: "Michael",
//     email: "michael1@gmail.com",
//   //   firstName: "Michael",
// 	// lastName: "Wilson",
// 	  password: "Michael@123"
//   },
//   {
//     _id: ObjectId("5bcb3df1f0cf16368cf781c0"),
//     name: "Cindy",
//     email: "cindy1@gmail.com",
//   //   firstName: "Cindy",
// 	// lastName: "Pang",
// 	  password: "Cindy@123"
//   }
// ];

const coffeeSeed = [
  {
    _id: ObjectId("5bcb3ec4341aab6b1cdec04b"),
    brand: "Starbucks",
    cname: "Caffe Verona",
    roast: "Dark",
	  Origin: "Latin America",
	  yearHarvested: "2018",
    price: "19.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/81%2BcreNFopL._SY355_.jpg"
  },
  {
    _id: ObjectId("5bcb3ec4341aab6b1cdec04c"),
    brand: "Starbucks",
    cname: "Pike Place",
    roast: "Medium",
	  Origin: "America",
	  yearHarvested: "2000",
    price: "29.99",
    image: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_fbdca959-d660-4e5c-8f52-46c71f3fb6d4.JPG"
  },
  {
	  _id: ObjectId("5bcb4c629d7c1b765042911b"),
    brand: "JBC Coffee Roasters",
    cname: "Alemu Bukato",
    roast: "Medium",
	  Origin: "Africa",
	  yearHarvested: "2000",
    price: "18.75",
    image: "https://www.gocoffeego.com/coffee-images/JBC-Coffee-Roasters-Alemu-Bukato-Ethiopia.6721.lg.jpg"
  },
  {
	  _id: ObjectId("5bcb4c629d7c1b765042911c"),
    brand: "Counter Culture",
    cname: "Kenya- Variety Set",
    roast: "Medium",
	  Origin: "Africa",
	  yearHarvested: "2000",
    price: "29.00",
    image: "https://counterculturecoffee.com/wp-content/uploads/2018/09/Kenya_Variety_Set_gal.jpg"
  },
  {
	  _id: ObjectId("5bcb4c629d7c1b765042911d"),
    brand: "Counter Culture",
    cname: "Yabitu Tome",
    roast: "Medium",
	  Origin: "Africa",
	  yearHarvested: "2005",
    price: "19.00",
    image: "https://counterculturecoffee.com/wp-content/uploads/2018/09/Yabitu_Tome_main.jpg"
  },
  {
	  _id: ObjectId("5bcb4c629d7c1b765042911e"),
    brand: "Batdorf & Bronson",
    cname: "Capitol Blend",
    roast: "Medium",
	  Origin: "America",
	  yearHarvested: "2000",
    price: "14.00",
    image: "https://www.batdorfcoffee.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/capitol_blend_1.jpg"
  }
];
const reviewSeed = [
  {
    userName: ObjectId("5bcb3df1f0cf16368cf781bd"),
    name: ObjectId("5bcb3ec4341aab6b1cdec04b"),
    title: "A good coffee",
    brewMethod: "Turkish",
	  flavors: "Nutty, Toasty",
	  notes: "these are mah notes",
    rating: "4"
  },
  {
    userName: ObjectId("5bcb3df1f0cf16368cf781bd"),
    name: ObjectId("5bcb3ec4341aab6b1cdec04c"),
    title: "A great coffee",
    brewMethod: "Turkish",
	  flavors: "Oak, Blackberries",
	  notes: "these are mah notes 2",
    rating: "4"
  },
  {
    userName: ObjectId("5bcb3df1f0cf16368cf781be"),
    name: ObjectId("5bcb3ec4341aab6b1cdec04c"),
    title: "An amazing coffee",
    brewMethod: "Drip",
	  flavors: "Fresh, Fruity",
	  notes: "these are mah notes numba 2",
    rating: "5"
  }
];

// db.User
//   .deleteMany({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted into user collection!");
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

db.Coffee
  .deleteMany({})
  .then(() => db.Coffee.collection.insertMany(coffeeSeed))
  .then(data => {
  console.log(data.result.n + " records inserted into coffee collection!");
  })
  .catch(err => {
  console.error(err);
  process.exit(1);
});

  db.Review
  .deleteMany({})
  .then(() => db.Review.collection.insertMany(reviewSeed))
  .then(data => {
    console.log(data.result.n + " records inserted into review collection!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });