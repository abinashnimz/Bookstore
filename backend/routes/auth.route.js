const route = require("express").Router();
const signup = require("../controllers/auth.controller");




route.post("/sign-up", signup);


module.exports = route;