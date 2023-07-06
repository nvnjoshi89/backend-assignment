module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'role_permissions',
      [
        {
          role_id: 1,
          permission_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('role_permissions', null, {});
  },
};
