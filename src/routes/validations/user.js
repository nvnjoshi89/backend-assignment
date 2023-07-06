import { body, query, oneOf, param } from 'express-validator';

export const getUserRules = [param('id').notEmpty().isInt()];


export const createUserRules = [
  body('full_name').notEmpty().isString(),
  body('email').isEmail().isString(),
  body('password').isLength({ min: 8 }).notEmpty().isString(),
  body('status').isBoolean().optional(),
  
  ,
];



  export const updateUserRules = [
    param('id').notEmpty().isInt(),
    body('full_name').notEmpty().isString().optional(),
    body('email').isEmail().isString().optional(),
    body('password').isLength({ min: 8 }).optional().isString(),
    body('status').isBoolean().optional(),

  ]
  