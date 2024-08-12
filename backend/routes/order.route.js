const router = require("express").Router();
const authenticateUser = require("../middleware/authUser");
const { placeOrder, orderHistory, allOrders, updateStatus } = require("../controllers/order.controller");


router.post("/placeOrder", authenticateUser, placeOrder);
router.get("/orderHistory", authenticateUser, orderHistory);
router.get("/showAllOrders", authenticateUser, allOrders);
router.put("/updateStatus", authenticateUser, updateStatus);

module.exports = router;