require("dotenv").config();
const express = require("express");
const app = express();
const dbConn = require("./utils/conn");
const PORT = process.env.LOCAL_PORT






dbConn().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Listening to the PORT: ${PORT}`);
    })
})