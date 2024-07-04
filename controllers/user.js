const user_details = require("../model/user");
const bcrypt = require('bcrypt');
const send_cookie = require("../src/utilities/send_cookie");
const jwt = require('jsonwebtoken');

const register_user = async (req, res) => {

    const { name, email, password } = req.body;

    let user = await user_details.findOne({ name });
    if (user) {
        res.status(404).json({
            success: false,
            message: "User Already Exists"
        })
    }
    else {
        const hashed_password = await bcrypt.hash(password, 10);
        user = await user_details.create({ name, email, password: hashed_password });

        send_cookie(res, 201, `User Registerd Sucessfully`, user);
    }
}

const login_user = async (req, res) => {

    const { name, password } = req.body;

    user = await user_details.findOne({ name });

    if (!user) {
        res.status(404).json({
            success: false,
            message: "User Name or Password is Incorrect"
        });
    }
    else {
        const password_matched = await bcrypt.compare(password, user.password);

        if (!password_matched) {
            res.status(404).json({
                success: false,
                message: "User Name or Password is Incorrect"
            });
        }

        else {
            send_cookie(res, 201, `welcome ${user.name}`, user);
        }
    }
}

const get_profile = async (req, res) => {
    res.status(200).json({
        success: true,
        user
    });

}

const logout_user = async(req,res) =>{
    res.status(200).cookie("token",'',{expires:new Date(Date.now())}).json({
        success:true,
        message:"Logout Sucessfull"
    })
}
module.exports = { register_user, login_user, get_profile, logout_user}; 