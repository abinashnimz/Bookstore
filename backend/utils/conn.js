const mongoose = require("mongoose");

const URI = process.env.MONGO_URI

const dbConn = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("DB Connection successfuly");
    }catch(err){
        console.log("DB Connection failed")
    }
}

module.exports = dbConn;
