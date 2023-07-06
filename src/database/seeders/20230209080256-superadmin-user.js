import { compare, hash } from 'bcrypt';

module.exports = {
  async up(queryInterface, Sequelize) {
    const adminPassword = await hash('Nepal@1234', 10);
    await queryInterface.bulkInsert(
      'users',
      [
        {
          branch_id: 1,
          full_name: 'navin joshi',
          email: 'super@admin.com',
          password: adminPassword,
          status: true,
          last_logged_in: new Date(),
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
    await queryInterface.bulkDelete('users', null, {});
  },
};
