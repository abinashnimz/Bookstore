const Order = require("../models/order.model");
const User = require("../models/user.model");


const placeOrder = async (req, res)=>{
    try{
        const userId = req.user.userId;
        const orders = req.body;

        for (const order of orders){
            const newOrder = new Order({
                user: userId,
                book: order
            });
            //saving new order to the OrderDB
            const orderedData = await newOrder.save();
            //saving order in the UserDB
            await User.findByIdAndUpdate(userId, {
                $push: {orders:orderedData._id}
            });
            //clearing cart
            await User.findByIdAndUpdate(userId, {
                $pull: {cart:orderedData._id}
            });
        }
        return res.status(201).json({
            status:"success",
            msg: "Order placed"
        })
    }catch(err){
        return res.status(500).json({msg: "Server not responding"});
    }
}

const orderHistory = async (req, res)=>{
    try{
        const userId = req.user.userId;
        const userData = await User.findById(userId).populate("Order");
        const orderData = userData.orders.reverse();
        if(!orderData){
            return res.status(401).json({msg: "No order yet"});
        }
        return res.status(200).json({
            status: "success",
            data: orderData
        });
    }catch(err){
        return res.status(500).json({msg: "Server not responding"});
    }
}

const allOrders = async (req, res)=>{
    try{
        const userId = req.user.userId;
        const userData = await User.findById(userId);
        if(userData.role === "user"){
            return res.status(401).json({msg: "You are not allowed to perform this task"});
        }
        const allOrders = await Order.find()
        .populate("User").populate("Book")
        .sort({createdAt:-1});
        if(!allOrders){
            return res.status(402).json({msg: "No orders found"});
        }
        return res.status(200).json({
            status: "success",
            data: allOrders
        })
    }catch(err){
        return res.status(500).json({msg: "Server not responding"});
    }
}

const updateStatus = async (req, res)=>{
    try{
        const {orderId} = req.params;
        const response = await Order.findByIdAndUpdate(orderId, {
            status : req.body.status
        });
        if(!response){
            return res.status(401).json({msg: "Update status failed"});
        }
        return res.status(201).json({
            status: "success",
            msg: "Update Status successful"
        });
    }catch(err){
        return res.status(500).json({msg: "Server not responding"});
    }
}

module.exports = { placeOrder, orderHistory, allOrders, updateStatus };