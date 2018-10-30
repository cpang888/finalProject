const router = require("express").Router();
// const bookRoutes = require("./books");
const coffeeRoutes = require("./coffee");
const reviewRoutes = require("./reviews")

// Book routes
// router.use("/books", bookRoutes);
router.use('/coffees', coffeeRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;