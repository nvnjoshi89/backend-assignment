import createError from 'http-errors';
import db from '@/database';
import sequelize from 'sequelize';


// Generate sales report by day
export const generateSale = async (req, res) => {
    try {
        const salesReport = await db.models.order.findAll({
            attributes: [
                [
                    sequelize.fn('date_trunc', 'day', sequelize.col('order.createdAt')),
                    'day',
                ],
                [sequelize.fn('sum', sequelize.col('product.price')), 'totalSales'],
                'product.id', 
                'product.name',
                'product.description',
                'product.price',
                'product.createdAt',
                'product.updatedAt',
            ],
            include: [{ model: db.models.product, as: 'product' }],
            group: [
                sequelize.fn('date_trunc', 'day', sequelize.col('order.createdAt')),
                'product.id', 
                'product.name',
                'product.description',
                'product.price',
                'product.createdAt',
                'product.updatedAt',
            ],
            order: [[sequelize.col('day'), 'DESC']],
        });
        return res.status(201).json(salesReport);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
