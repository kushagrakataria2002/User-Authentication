const user_details = require("../../model/user");
const jwt = require('jsonwebtoken'); 

const is_login = async(req,res,next) =>{
    const {token} = req.cookies; 

    if(!token){
        res.status(404).json({
            success:false,
            message:"Login First"
        }); 
    }

    else{
        const decoded_data = jwt.verify(token,process.env.JWT_SECRET); 

        user = await user_details.findOne(decoded_data._id);
        next(); 
    }
}

module.exports = is_login; 