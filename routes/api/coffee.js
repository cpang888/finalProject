const router = require("express").Router();
const coffeesController = require("../../controllers/coffeeController");

// Matches with "/api/coffees"
router.route("/")
  .get(coffeesController.findAll);

// Matches with "/api/coffees/:id"
  router
  .route("/:id")
  .get(coffeesController.findById);

  router
  .route("/search/:value")
  .get(coffeesController.findByNameBrand);

module.exports = router;
