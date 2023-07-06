import { body, query, oneOf, param } from 'express-validator';

export const getOrderRules = [param('id').notEmpty().isInt()];


export const createOrderRules = [
  body('user_id').notEmpty().isInt(),
  body('product_id').notEmpty().isInt(),
  body('price').notEmpty().isFloat(),  
  ,
];



  export const updateOrderRules = [
    param('id').notEmpty().isInt(),
    body('user_id').notEmpty().isInt().optional(),
    body('product_id').notEmpty().isInt().optional(),
    body('price').notEmpty().isFloat().optional(),  

  ]
  