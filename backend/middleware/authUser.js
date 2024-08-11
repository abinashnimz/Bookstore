const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next)=>{
    try{
        const authHeaders = await req.headers["authorization"];
        const token = authHeaders.split(" ")[1];
        
        if(!token){
            return res.status(401).json({msg: "Authentication token required"});
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
            if(err){
                return res.status(401).json({msg: "Authentication token required"});
            }
            req.user = user;
        })
        next()
    }catch(err){
        console.log(err);
    }
}

module.exports = authenticateUser;