import express from 'express';
import { getCourses } from '../controllers/coursesControllers.js';

const router = express.Router();

router.route('/')
                .get(getCourses);

export default router;