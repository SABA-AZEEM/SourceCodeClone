import express from 'express';
import { loginUser, registerUser } from '../controllers/userControllers.js';

const router = express.Router();

router
    .route('/')
    .post(registerUser);

router.post('/login',loginUser);
router.post('/logout',)


export default router;