const route = require("express").Router();
const {getUser, updateAddress} = require("../controllers/user.controller");
const authenticateUser = require("../middleware/authUser");


route.get("/getUser", authenticateUser, getUser);
route.put("/updateAddress", authenticateUser, updateAddress);


module.exports = route;