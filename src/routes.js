import { Router } from 'express';
import Controllers from './controllers';

const router = Router();

Controllers.createControllers(router);

export default router;