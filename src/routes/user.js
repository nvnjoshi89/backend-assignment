import { Router } from 'express';

import * as userController from '@/controllers/user';
import * as userValidations from '@/routes/validations/user';
import { isAuthenticated, validate } from '@/middleware';

const router = Router();

router
  .route('/')
  .get(isAuthenticated, userController.getUser)
  .post( validate(userValidations.createUserRules) ,userController.createUser)
 

router
  .route('/:id')
  .get(isAuthenticated, userController.getUserById)
  .put(isAuthenticated, validate(userValidations.updateUserRules), userController.updateUserById)
  .delete(isAuthenticated, userController.deleteUser);


export default router;
