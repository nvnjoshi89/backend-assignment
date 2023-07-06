module.exports = {
  async up (queryInterface, Sequelize) {
    const provinceList = [
      { name: "Koshi"},
      { name: "Madesh"},
      { name: "Bagmati"},
      { name: "Gandaki"},
      { name: "Lumbini"},
      { name: "Karnali"},
      { name: "Sudurpashchim"}
    ];
    await queryInterface.bulkInsert('provinces', provinceList, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('provinces', null, {});
  }
};