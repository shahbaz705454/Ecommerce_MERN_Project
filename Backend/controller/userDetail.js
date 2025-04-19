

exports.userDetailController = async (req, resp) => {
    try{
        

    }catch(err){
        resp.status(500).json({
            success: false,
            message: err.message
        })
    }
}