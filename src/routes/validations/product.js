import { body, query, oneOf, param } from 'express-validator';

export const getProductRules = [param('id').notEmpty().isInt()];


export const createProductRules = [
  body('name').notEmpty().isString(),
  body('description').notEmpty().isString(),
  body('price').notEmpty().isFloat(),  
  ,
];



  export const updateProductRules = [
    param('id').notEmpty().isInt(),
    body('name').notEmpty().isString().optional(),
  body('description').notEmpty().isString().optional(),
  body('price').notEmpty().isFloat().optional(),  
  ]
  