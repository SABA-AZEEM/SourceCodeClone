import express from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/userControllers.js';

const router = express.Router();

router
    .route('/')
    .post(registerUser);

router.post('/login',loginUser);
router.get('/logout',logoutUser)


export default router;