const Book = require("../models/book.model");
const User = require("../models/user.model");

const addBook = async (req, res)=>{
    try{
        const userId = req.user.userId;
        const user = await User.findById(userId);
        if(user.role==="user"){
            return res.status(401).json({msg: "You are not allowed do this task"});
        }
        const newBook = new Book({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language
        });
        const response = await newBook.save();
        if(!response){
            return res.status(403).json({msg: "Something went wrong"});
        }
        if(response){
            return res.status(201).json({msg: "Book created"});
        }
    }catch(err){
        console.log(err);
    }
}

const updateBook = async (req, res)=>{
    try{
        const userId = req.user.userId;
        const user = await User.findById(userId);
        if(user.role==="user"){
            return res.status(401).json({msg: "You are not allowed do this task"});
        }
        const bookid = req.headers.bookid
        const response = await Book.findByIdAndUpdate(bookid, {
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language
        }, {new:true});
        console.log(response);
        if(!response){
            return res.status(403).json({msg: "Something went wrong"});
        }
        if(response){
            res.status(200).json({msg: "Book updated"});
        }
    }catch(err){
        console.log(err);
    }
}

const deleteBook = async (req, res)=>{
    try{
        const userId = req.user.userId;
        const user = await User.findById(userId);
        if(user.role==="user"){
            return res.status(401).json({msg: "You are not allowed do this task"});
        }
        const bookid = req.headers.bookid
        const response = await Book.findByIdAndDelete(bookid);
        console.log(response);
        if(!response){
            return res.status(403).json({msg: "Something went wrong"});
        }
        if(response){
            res.status(200).json({msg: "Book deleted"});
        }
    }catch(err){
        console.log(err);
    }
}

const getBooks = async (req, res)=>{
    try{
        const books = await Book.find().sort({createdAt:-1});
        if(books){
            res.status(200).json({
                status: "success",
                data: books
            });
        }
        if(!books){
            res.status(401).json({msg: "No books found"});
        }
    }catch(err){
        console.log(err);
    }
}

const recentBooks = async (req, res)=>{
    try{
        const books = await Book.find().limit(4).sort({createdAt:-1});
        if(books){
            res.status(200).json({
                status: "success",
                data: books
            });
        }
        if(!books){
            res.status(401).json({msg: "No books found"});
        }
    }catch(err){
        console.log(err);
    }
}

const getBook = async (req, res)=>{
    try{
        const bookid = req.params.id;
        const books = await Book.findById(bookid);
        if(books){
            res.status(200).json({
                status: "success",
                data: books
            });
        }
        if(!books){
            res.status(401).json({msg: "No books found"});
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = { addBook, updateBook, deleteBook, getBooks, recentBooks, getBook };