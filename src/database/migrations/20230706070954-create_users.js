export const up = (queryInterface, Sequelize) =>
  queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    full_name: {
      allowNull: false,
      type: Sequelize.STRING(50),
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING(50),
      unique: true,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    refresh_token: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    status: {
      allowNull: true,
      default:true,
      type: Sequelize.BOOLEAN,
    },
    last_logged_in: {
      allowNull: true,
      type: Sequelize.DATE,
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

export const down = (queryInterface) => queryInterface.dropTable('users');
