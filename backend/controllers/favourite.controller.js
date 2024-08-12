const User = require("../models/user.model");

const addToFavourite = async (req, res)=>{
    try{
        const bookid = req.headers.bookid;
        const userId = req.user.userId;
        const userData = await User.findById(userId);
        const isBookFav = userData.favourites.includes(bookid);
        if(isBookFav){
            return res.status(401).json({msg: "Book already in favouritesfavourites"});
        }
        const response = await User.findByIdAndUpdate(userId, {$push: {favourites:bookid}});
        if(response){
            return res.status(201).json({msg: "Book added to the favourites"});
        }
        if(!response){
            return res.status(201).json({msg: "Failto  add to the favourites"});
        }
    }catch(err){
        return res.status(500).json({msg: "Server not responding"});
    }
}

const removeFromFavourite = async (req, res)=>{
    try{
        const bookid = req.headers.bookid;
        const userId = req.user.userId;
        const userData = await User.findById(userId);
        const isBookFav = userData.favourites.includes(bookid);
        if(isBookFav){
            const response = await User.findByIdAndUpdate(userId, {$pull: {favourites:bookid}});
            if(response){
                return res.status(201).json({msg: "Book remove from the favourites"});
            }
            if(!response){
                return res.status(201).json({msg: "Failto remove from the favourites"});
            }
        }
        if(!isBookFav){
            return res.status(401).json({msg: "Book not found"});
        }
    }catch(err){
        return res.status(500).json({msg: "Server not responding"});
    }
}

const showFavourites = async (req, res)=>{
    try{
        const userId = req.user.userId;
        const userData = await User.findById(userId).populate('favourites');
        const data = userData.favourites;
        if(!data){
            return res.status(401).json({msg:"Error finding Favourites"});
        }
        if(data){
            return res.status(200).json({
                status:"success",
                data: data
            });
        }
    }catch(err){
        return res.status(500).json({msg: "Server not responding"});
    }
}


module.exports = { addToFavourite, removeFromFavourite, showFavourites };