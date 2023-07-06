import { DataTypes, Model } from 'sequelize';


export default function (sequelize) {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.user, { foreignKey: 'user_id' });
      Order.belongsTo(models.product, { foreignKey: 'product_id' });
    }
   
  }

  Order.init(
    {
        user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
          },   
        product_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
          },   
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      }
    },
    {
      modelName: 'order',
      tableName: 'orders',
      sequelize,
    }
  );



  

  return Order;
}
