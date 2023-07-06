module.exports = {
  async up (queryInterface, Sequelize) {
    const documentTypes = [
      {
        code: 'CITIZENSHIP-DOC',
        description: 'Citizenship Document'
      },
      {
        code: 'PAN-DOC',
        description: 'PAN Document'
      },
    ];
    await queryInterface.bulkInsert('document_types', documentTypes, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('document_types', null, {});
  }
};
