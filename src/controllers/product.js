import createError from 'http-errors';
import db from '@/database';

/**
 * POST /products
 * Create product request
 */
export const createProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    const product = await db.models.product.create(productData);
    return res.status(201).json(product);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /products
 */
export const getProduct = async (req, res, next) => {
  try {
    // const product = await db.models.product.findAll();
    const { page = null, perPage = 10 } = req.query;

    let offset;

    if (page) {
      offset = page * perPage - perPage;
    }

    let params = {
      order: [['createdAt', 'DESC']]
    };

    if (page) {
      params['offset'] = offset;
      params['limit'] = perPage;
      params['distinct'] = true;
    }

    const orderListResponse = await db.models.product.findAndCountAll(params);

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
 * GET /products/:id
 * Get product by id
 */
export const getProductById = async (req, res, next) => {
  try {
    const { id: productId } = req.params;
    const product = await db.models.product.findOne({ where: { id: productId } });
    return res.status(201).json(product);
  } catch (error) {
    return next(error);
  }
};

/**
 * PUT /products/:id
 * UPDATE product by id
 */
export const updateProductById = async (req, res, next) => {
  try {
    const { id: productId } = req.params;
    const productData = { ...req.body };
    const product = await db.models.product.findOne({ where: { id: productId }, attributes: ['id'] });
    if (!product) {
      return next(createError(404, 'There is no product with this id!'));
    }
    await product.update(productData);
    return res.status(201).json(product);
  } catch (error) {
    return next(error);
  }
};

/**
 * DELETE /products/:id
 * Delete product request
 */
export const deleteProduct = async (req, res, next) => {
  try {
    const { id: productId } = req.params;
    const product = await db.models.product.findOne({ where: { id: productId } });
    if (!product) {
      return next(createError(4044, 'There is no product with this id!'));
    }
    await product.destroy();
    return res.status(204).json({
      deleted: true,
    });
  } catch (error) {
    return next(error);
  }
};
