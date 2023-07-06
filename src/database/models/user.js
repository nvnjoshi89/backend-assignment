import { compare, hash } from 'bcrypt';
import { DataTypes, Model } from 'sequelize';

import { tokenHelper, mailHelper } from '@/helpers';

export default function (sequelize) {
  class User extends Model {
    static associate(models) {
      // User.belongsTo(models.branch, { foreignKey: 'branch_id' });
      // User.hasOne(models.userRole, { foreignKey: 'user_id' });
      // User.hasMany(models.permission, { foreignKey: 'user_id' });
      // User.hasOne(models.macAddress, { foreignKey: 'user_id' });
    }
   

    generateToken(expiresIn = '8h') {
      const data = { id: this.id, email: this.email };
      return tokenHelper.generateToken(data, expiresIn);
    }

    validatePassword(plainPassword) {
      return compare(plainPassword, this.password);
    }


  }

  User.init(
    {
      full_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      refresh_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      },
   
      last_logged_in: {
        type: DataTypes.DATE,
        // defaultValue: Date.now(),
        allowNull: true,
      },
    },
    {
      modelName: 'user',
      defaultScope: { attributes: { exclude: ['password'] } },
      scopes: {
        withPassword: { attributes: { include: ['password'] } },
      },
      sequelize,
    }
  );

  User.addHook('beforeSave', async (instance) => {
    if (instance.changed('password')) {
      instance.password = await hash(instance.password, 10);
    }
  });

  

  return User;
}
