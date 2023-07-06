import { Router } from 'express';

import * as salesReportController from '@/controllers/salesReport';
import { isAuthenticated, validate } from '@/middleware';

const router = Router();

router
  .route('/')
  .post(isAuthenticated ,salesReportController.generateSale)



export default router;
