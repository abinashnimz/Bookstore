const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true,
    },
    address : {
        type: String,
        required: true,
    },
    avatar : {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
    },
    role : {
        type: String,
        default: "user",
        enum: ["user", "admin"],
    },
    favourites: [
        {
            type: mongoose.Types.ObjectId,
            ref: "book",
        }
    ],
    cart: [
        {
            type: mongoose.Types.ObjectId,
            ref: "book",
        }
    ],
    orders: [
        {
            type: mongoose.Types.ObjectId,
            ref: "order",
        }
    ]
}, {timestamps:true});


//Middleware for hashing password
userSchema.pre("save", async function(next){
    try{
        let user = this;
        const saltRound = await bcrypt.genSalt(10);
        if(user.isModified("password")){
            user.password = await bcrypt.hash(user.password, saltRound);
        }
        next();
    }catch(err){
        next(err);
    }
})


const User = new mongoose.model("User", userSchema);
module.exports = User;