const router = require("express").Router();
const User = require("../models/user.model");
const authenticateUser = require("../middleware/authUser");
const { addToFavourite, removeFromFavourite, showFavourites } = require("../controllers/favourite.controller");

router.put("/addToFavourite", authenticateUser, addToFavourite);
router.put("/removeFromFavourite", authenticateUser, removeFromFavourite);
router.get("/showFavourites", authenticateUser, showFavourites);


module.exports = router;