import { Router } from 'express';

import * as authController from '@/controllers/auth';
import * as authValidations from '@/routes/validations/auth';
import { isAuthenticated, validate } from '@/middleware';

const router = Router();

router.post('/login', validate(authValidations.loginRules), authController.login);
// router.get('/refresh', authController.handleRefreshToken);

// router.put(
//   '/me/password',
//   isAuthenticated,
//   validate(authValidations.changePasswordRules),
//   authController.updatePassword
// );


export default router;
