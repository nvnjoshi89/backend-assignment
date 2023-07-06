export const up = (queryInterface, Sequelize) =>
  queryInterface.createTable('products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING(50),
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING(200),
    },
    price: {
      allowNull: false,
      type: Sequelize.DECIMAL(10,2),
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  });

export const down = (queryInterface) => queryInterface.dropTable('products');
