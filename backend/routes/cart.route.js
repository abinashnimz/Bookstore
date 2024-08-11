const router = require("express").Router();
const authenticateUser = require("../middleware/authUser");
const {addToCart, deleteFromCart, showCart} = require("../controllers/cart.controller");

router.put("/addToCart", authenticateUser, addToCart);
router.put("/removeFromCart", authenticateUser, deleteFromCart);
router.get("/showCart", authenticateUser, showCart);

module.exports = router;