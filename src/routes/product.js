import { Router } from 'express';

import * as productController from '@/controllers/product';
import * as productValidations from '@/routes/validations/product';
import { isAuthenticated, validate } from '@/middleware';

const router = Router();

router
  .route('/')
  .get(isAuthenticated, productController.getProduct)
  .post(isAuthenticated,validate(productValidations.createProductRules) ,productController.createProduct)

router
  .route('/:id')
  .get(isAuthenticated, productController.getProductById)
  .put(isAuthenticated, validate(productValidations.updateProductRules), productController.updateProductById)
  .delete(isAuthenticated, productController.deleteProduct);


export default router;
