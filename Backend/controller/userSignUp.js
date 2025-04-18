const user = require("../model/userModel");
const bcrypt = require("bcryptjs");
exports.userSignUpController =async(req,resp)=>{

    try{

        const {name ,email ,password ,confirmPassword,profilePic}= req.body;
        
        if(password !=confirmPassword){
            return resp.status(500).json({
                message:"Password Does not match",
                success:false
            })
        }

        if(!name || !email || !password || !confirmPassword ){
            return resp.status(500).json({
                message:"All fields are required",
                success:false
            })
        }
        const existingUser = await user.findOne({email});
        if(existingUser){
            return resp.status(200).json({
                message:"User already exists",
                success:false
            })
            
        }
        const hashPassword =await bcrypt.hash(password,10);

        if(!hashPassword){
            return resp.status(500).json({
                message:"Error in hashing password",
                success:false
            })
        }

        const newUser = await user.create({
            name,
            email,
            password:hashPassword,
            profilePic,
        })
        if(!newUser){
            return resp.status(500).json({
                message:"Error in creating user",
                success:false
            })
        }
        return resp.status(200).json({
            message:"User created successfully",
            success:true,
            newUser
        })





        




    }catch(err){

        return resp.status(500).json({
            success: false,
            message: err.message,
        })

    }

}