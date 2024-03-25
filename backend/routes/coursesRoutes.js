import express from 'express';
import { createPayment, getCourses } from '../controllers/coursesControllers.js';

const router = express.Router();

router.route('/').get(getCourses);
router.route('/payment').post(createPayment);

export default router;