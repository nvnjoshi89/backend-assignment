import createError from 'http-errors';
import db from '@/database';
import sequelize from 'sequelize';

/**
 * POST /orders
 * Create order request
 */
export const createOrder = async (req, res, next) => {
  try {
    console.log('hello');
    const orderData = req.body;
    const order = await db.models.order.create(orderData);
    return res.status(201).json(order);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /orders
 */
export const getOrder = async (req, res, next) => {
  try {
    // const order = await db.models.order.findAll({
    //   attributes: [
    //     'id',
    //     [sequelize.col('user.full_name'), 'oder placed by'],
    //     [sequelize.col('product.name'), 'product name'],
    //     'user_id',
    //     'product_id',
    //     'createdAt',
    //   ],
    //   include: [{
    //     model: db.models.user,
    //     attributes: [],
    //   },
    //   {
    //     model: db.models.product,
    //     attributes: []
    //   }

    //   ],
    // });
    const { page = null, perPage = 10 } = req.query;

    let offset;

    if (page) {
      offset = page * perPage - perPage;
    }

    let params = {
      order: [['createdAt', 'DESC']],
      attributes: [
            'id',
            [sequelize.col('user.full_name'), 'oder placed by'],
            [sequelize.col('product.name'), 'product name'],
            'user_id',
            'product_id',
            'createdAt',
          ],
          include: [{
            model: db.models.user,
            attributes: [],
          },
          {
            model: db.models.product,
            attributes: []
          }
    
          ],
    };

    if (page) {
      params['offset'] = offset;
      params['limit'] = perPage;
      params['distinct'] = true;
    }

    const orderListResponse = await db.models.order.findAndCountAll(params);

    const totalPage = Math.ceil(orderListResponse.count / perPage);
    const response = {
      ...orderListResponse,
      page,
      totalPage,
      perPage,
    };
    return res.status(201).json(response);
  } catch (error) {
    return next(error);
  }
};

/**
 * GET /orders/:id
 * Get order by id
 */
export const getOrderById = async (req, res, next) => {
  try {
    const { id: orderId } = req.params;
    const order = await db.models.order.findOne({ where: { id: orderId },
      attributes: [
        'id',
        [sequelize.col('user.full_name'), 'oder placed by'],
        [sequelize.col('product.name'), 'product name'],
        'user_id',
        'product_id',
        'createdAt',
      ],
      include: [{
        model: db.models.user,
        attributes: [],
      },
      {
        model: db.models.product,
        attributes: []
      }

      ], });
    return res.status(201).json(order);
  } catch (error) {
    return next(error);
  }
};

/**
 * PUT /orders/:id
 * UPDATE order by id
 */
export const updateOrderById = async (req, res, next) => {
  try {
    const { id: orderId } = req.params;
    const orderData = { ...req.body };
    const order = await db.models.order.findOne({ where: { id: orderId }, attributes: ['id'] });
    if (!order) {
      return next(createError(404, 'There is no order with this id!'));
    }
    await order.update(orderData);
    return res.status(201).json(order);
  } catch (error) {
    return next(error);
  }
};

/**
 * DELETE /orders/:id
 * Delete order request
 */
export const deleteOrder = async (req, res, next) => {
  try {
    const { id: orderId } = req.params;
    const order = await db.models.order.findOne({ where: { id: orderId } });
    if (!order) {
      return next(createError(4044, 'There is no order with this id!'));
    }
    await order.destroy();
    return res.status(204).json({
      deleted: true,
    });
  } catch (error) {
    return next(error);
  }
};
