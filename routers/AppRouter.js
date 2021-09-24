import { Router } from 'express';
import AppController from '../controllers/AppController.js';

const router = Router();
const appController = new AppController();

router.get('/app', appController.app);
router.post('/data', appController.data);

export default router;
