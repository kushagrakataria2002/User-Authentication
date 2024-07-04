const jwt = require('jsonwebtoken'); 

const send_cookie = (res,status_code,message,user) => {
    const jwt_token = jwt.sign({ "jwt_token": user._id }, process.env.JWT_SECRET);

    res.status(status_code).cookie("token", jwt_token, { httpOnly: true}).json({
        success: true,
        message
    });
}

module.exports = send_cookie; 