import { DataTypes, Model } from 'sequelize';


export default function (sequelize) {
  class Product extends Model {
    static associate(models) {
      // Product.hasOne(models.user, { foreignKey: 'user_id' });
      Product.hasOne(models.order, { foreignKey: 'product_id' });
    
    }
   
  }

  Product.init(
    {
        
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      }
    },
    {
      modelName: 'product',
      tableName: 'products',
      sequelize,
    }
  );



  

  return Product;
}
