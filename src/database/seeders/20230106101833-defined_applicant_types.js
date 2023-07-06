module.exports = {
  async up (queryInterface, Sequelize) {
    const applicantTypes = [
      {
        title: 'Individual',
        description: 'Individual Applicant',
        status: true
      },
      {
        title: 'Group',
        description: 'Group of Applicant',
        status: true
      },
      {
        title: 'Institution',
        description: 'Institutional Applicant',
        status: true
      },
    ];
    await queryInterface.bulkInsert('applicant_types', applicantTypes, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('applicant_types', null, {});
  }
};
