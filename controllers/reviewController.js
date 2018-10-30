const db = require('../models');
const ObjectId = require('mongodb').ObjectID;

function updateAvgReview(coffeeId) {
  db.Review.find({name: ObjectId(coffeeId)})
  .then(data => {
    let allRatings = data.map(review => review.rating);
    let avgRating = Math.round(allRatings.reduce((prev, curr) => prev + curr) / allRatings.length);
    db.Coffee.updateOne({_id: ObjectId(coffeeId)}, {$set: {avgRating: avgRating} })
      .catch(err => res.status(422).json(err));
  })
  .catch(err => res.status(422).json(err));
}

module.exports = {
  findAll: function(req, res) {
    db.Review
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("req.body.title: ", req.body.title);
    db.Review
      .create({
        // userName: req.session.id, // TO DO: make sure this works.
        name: ObjectId(req.body.name),
        title: req.body.title,
        brewMethod: req.body.brewMethod,
        flavors: req.body.flavors,
        rating: req.body.rating,
        notes: req.body.notes
      })
      .then( () => updateAvgReview(req.body.name))
      .then( res.end() )
      // .then( res.redirect("/coffees/" + req.body.name) ) // this isn't working, so using res.end() in combination with window.location.assign on front-end (ReviewForm.js) instead
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Review
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("findById Review QUERY");
    console.log(req.params.id);
    db.Review
      .find({ name: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  findByUser: function(req, res) {
    console.log("findByUser executing with userId 5bcb3df1f0cf16368cf781bd");
    db.Review
      .find({ userName: ObjectId(req.params.userId) })
      .populate("name")
      .then(dbModel => {
        console.log("dbModel[0].name", dbModel[0].name);
        console.log("dbModel:", dbModel);
        res.json(dbModel);
        }
      )
      .catch(err => res.status(422).json(err));
  }
}
