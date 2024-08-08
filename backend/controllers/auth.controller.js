const User = require("../models/user.model");



const signup = async (req, res)=>{
    try{
        const { username, email, password, cpassword, address } = req.body;
        if(!username || !email || !password || !cpassword || !address || username=="" || email=="" || password=="" || cpassword=="" || address==""){
            return res.status(403).json({msg: "All fields are required"});
        }
        if(password!==cpassword){
            return res.status(402).json({msg: "Password not matching"});
        }

        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(402).json({msg:"This email already taken"});
        }

        const newUser = new User({
            username: username,
            email: email,
            password: password,
            address: address,
        });
        const response = await newUser.save();
        if(!response){
            return res.status(404).json({msg: "Something went wrong"});
        }
        if(response){
            return res.status(201).json({msg: "Signup Successful"});
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = signup;