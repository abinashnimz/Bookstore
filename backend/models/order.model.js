const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: "Book",
    },
    status: {
        type: String,
        default: "Order Placed",
        enum: ["Order Placed", "Out for Delivery", "Delivered", "Canceled"],
    }
}, {timestamps: true});

const Order = new mongoose.model("Order", orderSchema);
module.exports = Order;