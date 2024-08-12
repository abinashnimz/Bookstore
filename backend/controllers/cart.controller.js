const User = require("../models/user.model");


const addToCart = async (req, res)=>{
    try{
        const userId = req.user.userId;
        const bookid = req.headers.bookid;
        const userData = await User.findById(userId);
        const isBookCart = userData.cart.includes(bookid);
        if(isBookCart){
            return res.status(401).json({msg: "This book already in cart"});
        }
        if(!isBookCart){
            const response = await User.findByIdAndUpdate(userId, {$push: {cart:bookid}});
            if(response){
                return res.status(201).json({msg: "Book added to the cart"});
            }else{
                return res.status(401).json({msg: "Failed to add book to the cart"});
            }
        }
    }catch(err){
        return res.status(500).json({msg: "Server not responding"});
    }
}

const deleteFromCart = async (req, res)=>{
    try{
        const userId = req.user.userId;
        const bookid = req.headers.bookid;
        const userData = await User.findById(userId);
        const isBookCart = userData.cart.includes(bookid);
        if(!isBookCart){
            return res.status(401).json({msg: "Book not found in cart"});
        }
        if(isBookCart){
            const response = await User.findByIdAndUpdate(userId, {$pull: {cart:bookid}});
            if(response){
                return res.status(201).json({msg: "Book remove from the cart"});
            }else{
                return res.status(401).json({msg: "Failed to remove book from the cart"});
            }
        }
    }catch(err){
        return res.status(500).json({msg: "Server not responding"});
    }
}

const showCart = async (req, res)=>{
    try{
        const userId = req.user.userId;
        const userData = await User.findById(userId).populate("cart");
        const data = userData.cart;
        if(!data){
            return res.status(401).json({msg: "Cart is empty"});
        }
        if(data){
            return res.status(200).json({
                status: "success",
                data: data
            });
        } 
    }catch(err){
        return res.status(500).json({msg: "Server not responding"});
    }
}


module.exports = {addToCart, deleteFromCart, showCart};