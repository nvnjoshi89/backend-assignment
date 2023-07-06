import { compare, hash } from 'bcrypt';

module.exports = {
  async up(queryInterface, Sequelize) {
    const reviewerPassword = await hash('Nepal@123', 10);

    await queryInterface.bulkInsert(
      'users',
      [
        {
          branch_id: 1,
          full_name: 'shyam',
          email: 'reviewer@himalayan.com',
          password: reviewerPassword,
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
