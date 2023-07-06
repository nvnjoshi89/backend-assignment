module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'permissions',
      [
        {
          module_link:'Branch', 
          actions:"['create','read','update','delete']",   
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          module_link:'district', 
          actions:"['create','read','update','delete']",   
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          module_link:'valuator', 
          actions:"['create','read','update','delete']",   
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
    await queryInterface.bulkDelete('permissions', null, {});
  },
};
