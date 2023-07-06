import { Router } from 'express';

import * as orderController from '@/controllers/order';
import * as orderValidations from '@/routes/validations/order';
import { isAuthenticated, validate } from '@/middleware';

const router = Router();

router
  .route('/')
  .get(isAuthenticated, orderController.getOrder)
  .post(isAuthenticated,validate(orderValidations.createOrderRules) ,orderController.createOrder)

router
  .route('/:id')
  .get(isAuthenticated, orderController.getOrderById)
  .put(isAuthenticated, validate(orderValidations.updateOrderRules), orderController.updateOrderById)
  .delete(isAuthenticated, orderController.deleteOrder);


export default router;
