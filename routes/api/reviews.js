const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

router.route("/user/:userId") // /:userId
  .get(reviewController.findByUser);
// router.
//   route("/user/:userId")
//   .get(reviewController.findByUser);

  // Matches with "/api/reviews/"
  router
  .route("/:id")
  .get(reviewController.findById); // coffee id

  router
  .route("/")
  .get(reviewController.findAll)
  .post(reviewController.create);

module.exports = router;
