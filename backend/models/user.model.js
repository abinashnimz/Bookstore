const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
});

//Middleware for comparing password
userSchema.methods.comparePassword = async function(password){
    try{
        const user = this;
        return bcrypt.compare(password, user.password);
    }catch(err){
        next(err);
    }
}

//Middleware for generate token
userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign(
            {
                userId: this._id,
                role: this.role
            },
            process.env.JWT_SECRET,
            {expiresIn:"30d"}
        )
    }catch(err){
        next(err);
    }
}


const User = new mongoose.model("User", userSchema);
module.exports = User;