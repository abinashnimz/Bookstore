const router = require("express").Router();
const {getUser, updateAddress} = require("../controllers/user.controller");
const authenticateUser = require("../middleware/authUser");


router.get("/getUser", authenticateUser, getUser);
router.put("/updateAddress", authenticateUser, updateAddress);


module.exports = router;