const User = require("../models/user.model");

const getUser = async (req, res)=>{
    try{
        const id = req.user.userId;
        const data = await User.findById({_id:id});
        return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}

const updateAddress = async (req, res)=>{
    try{
        const id = req.user.userId;
        await User.findByIdAndUpdate(id, {address: req.body.address});
        return res.status(200).json({msg:"User address updated"});
    }catch(err){
        console.log(err);
    }
}

module.exports = {getUser, updateAddress};