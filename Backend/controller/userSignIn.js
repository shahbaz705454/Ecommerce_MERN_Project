const user = require("../model/userModel");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
exports.userLoginController = async (req, resp) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return resp.status(400).json({
                success: false,
                message: "Please provide email and password"
            })
        }
       
        const userData = await user.findOne({ email });

        if (!userData) {
            return resp.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        const isMatch = await bcrypt.compare(password, userData.password);

        if (isMatch) {
            const tokenData = {
                id: userData._id,
                email: userData.email,
                name: userData.name
            }
            const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: "8h" });
            const options = {
                expires: new Date(Date.now() + 8 * 60 * 60 * 1000),
                httpOnly: true
            };
            return resp.cookie("token", token, options).status(200).json({
                success: true,
                token: token,
                message: "User logged in successfully"
            });


        } else {
            return resp.status(400).json({
                success: false,
                message: "Password is incorrect"
            })
        }

    } catch (err) {
        resp.status(500).json({
            success: false,
            message: err.message
        })
    }
}