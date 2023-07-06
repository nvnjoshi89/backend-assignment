module.exports = {
  async up (queryInterface, Sequelize) {
    const loanList = [
      {
        title: "Home",
        description: "Loan for buying house"
      },
      {
        title: "Auto",
        description: "Loan for buying vehicle"
      },
      {
        title: "Personal",
        description: "Loan for personal expenses"
      },
      {
        title: "Education",
        description: "Loan for educational purpose"
      },
      {
        title: "Business",
        description: "Loan for business purpose"
      },
      {
        title: "Corporate",
        description: "Loan for corporate"
      },
      {
        title: "SME",
        description: "Loan for Small & Medium Enterprises"
      },
      {
        title: "Gold",
        description: "Loan for gold"
      },
      {
        title: "Deprived Sector",
        description: "Loan for deprived sector"
      },
      {
        title: "Loan Against Share",
        description: "Loan against share"
      },
      {
        title: "Agriculture & Livestock",
        description: "Loan for Agriculture & Livestock"
      },
      {
        title: "Mortgage",
        description: "Mortgage Loan"
      },
    ];
    await queryInterface.bulkInsert('loan_categories', loanList, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('loan_categories', null, {});
  }
};
