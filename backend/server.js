require("dotenv").config();
const express = require("express");
const app = express();
const dbConn = require("./utils/conn");
const PORT = process.env.LOCAL_PORT
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

dbConn().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Listening to the PORT: ${PORT}`);
    })
})