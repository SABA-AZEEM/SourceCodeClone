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
    try{
        const {emailAddress,password} = req.body;

        const user = await User.findOne({emailAddress});
        if(user && (await user.matchPassword(password))){

            // Set cookie here
            res.cookie('currentUser', JSON.stringify({
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                emailAddress: user.emailAddress,
            }), {
                // secure: true,
                // httpOnly:true,
                // sameSite: 'strict',
            });

            res.status(201).json({
                _id:user._id,
                firstName:user.firstName,
                lastName:user.lastName,
                emailAddress:user.emailAddress,
            });
        }else{
            res.status(401).json({error:'Invalid email or password!'});
        }
    }catch(error){
        console.error('Error occurred during login:',error);
        res.status(500).json({error:'An unexpected error occurred'});
    }
};

// @desc user logout
// route POST /api/users/logout
// @access Public

export const logoutUser = async (req,res)=>{
    try {
        console.log('i am in logout funtion');
        const current = req.cookies.currentUser;
        console.log(current);
        // Clear the 'currentUser' cookie
        res.clearCookie('currentUser', { path: '/' });

        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error occurred during logout:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}