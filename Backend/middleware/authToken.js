

exports.authToken = (req, resp, next) => {
    try{
        const token = req.cookies.token || req.headers;
        if(!token){
            return resp.status(401).json({
                success: false,
                message: "User not found"
            })
        }
         console.log("token",token);


    }catch(err){
        resp.status(500).json({
            success: false,
            message: err.message
        })
    }
}