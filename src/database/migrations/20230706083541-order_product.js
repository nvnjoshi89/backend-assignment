'use strict';
export const up = (queryInterface, Sequelize) =>
  queryInterface.createTable('order_products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    order_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    product_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
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

export const down = (queryInterface) => queryInterface.dropTable('order_products');


  