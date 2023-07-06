import createError from 'http-errors';

import db from '@/database'
import { Sequelize } from 'sequelize';



/**
 * POST /user
 * create request
 */
export const createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = await db.models.user.create(userData);
    res.status(201).send(userData);
  } catch (err) {
    next(err);
  }
};


/**
 * GET /users
 */
export const getUser = async (req, res, next) => {
  try {
    const user = await db.models.user.findAll();
    return res.status(201).json(user);
  } catch (error) {
    return next(error);
  }
};

/**
 * GET /users/:id
 * Get user by id
 */
export const getUserById = async (req, res, next) => {
  try {
    const { id: userId } = req.params;
    const user = await db.models.user.findOne({ where: { id: userId } });
    return res.status(201).json(user);
  } catch (error) {
    return next(error);
  }
};

/**
 * PUT /users/:id
 * UPDATE user by id
 */
export const updateUserById = async (req, res, next) => {
  try {
    const { id: userId } = req.params;
    const userData = { ...req.body };
    const user = await db.models.user.findOne({ where: { id: userId }, attributes: ['id'] });
    if (!user) {
      return next(createError(404, 'There is no user with this id!'));
    }
    await user.update(userData);
    return res.status(201).json(user);
  } catch (error) {
    return next(error);
  }
};

/**
 * DELETE /users/:id
 * Delete user request
 */
export const deleteUser = async (req, res, next) => {
  try {
    const { id: userId } = req.params;
    const user = await db.models.user.findOne({ where: { id: userId } });
    if (!user) {
      return next(createError(4044, 'There is no user with this id!'));
    }
    await user.destroy();
    return res.status(204).json({
      deleted: true,
    });
  } catch (error) {
    return next(error);
  }
};