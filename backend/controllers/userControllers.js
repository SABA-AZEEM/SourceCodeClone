import User from "../models/userModel.js";

// @desc Register a new user
// route POST /api/users
// @access Public
export const registerUser = async(req,res)=>{
    try{
    const {firstName, lastName, emailAddress, password} = req.body;

    const userExist = await User.findOne({emailAddress});
    if(userExist){
        res.status(409).json({error:'User already exist'});
        return;
    }

    const user = await User.create({
        firstName,
        lastName,
        emailAddress,
        password,
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            emailAddress:user.emailAddress,
        });
        return;
    }else{
        res.status(400).json({error:'Invalid User data.'});
        return;
    }
    }catch(error){
        console.error(error);
        res.status(500).json({error:'Internal server error'});
    }
}

// @desc user login
// route POST /api/users/login
// @access Public
export const loginUser = async(req,res)=>{
    const {emailAddress,password} = req.body;

    const userExist = await User.findOne({emailAddress});
    if(userExist && userExist.password===password){
        res.status(201).json({
            _id:userExist._id,
            firstName:userExist.firstName,
            lastName:userExist.lastName,
            emailAddress:userExist.emailAddress,
        });
    }else{
        res.status(401);
        throw new Error('Invalid email or password!');
    }
}

// @desc user login
// route POST /api/users/login
// @access Public
export const logoutUser ={
    
}