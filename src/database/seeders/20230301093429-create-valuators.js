module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'valuators',
      [
       
        {
          name:'Nitesh bhatta', 
          expertise:'Home Loan Valuation',
          min_amount:500000,
          max_amount:800000,
           gender:'Male',
           address:'baneshwor,kathmandu',
           citizenship_number:'12345/7689/0071' ,
           citizenship_issue_date:'2058/07/26' ,
           citizenship_issue_district_id:1,
           branch_id: 1,
           associated_from:new Date(),
           mobile:'9848563340' ,
           email:'niteshbhatta@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
        },
        {
          name:'Navin Joshi', 
          expertise:'Education Loan Valuation',
          min_amount:500000,
          max_amount:800000,
           gender:'Male',
           address:'baneshwor,kathmandu',
           citizenship_number:'12345/7689/0071' ,
           citizenship_issue_date:'2058/07/26' ,
           citizenship_issue_district_id:1,
           branch_id: 1,
           associated_from: new Date(),
           mobile:'9848563340' ,
           email:'navinjoshi@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: new Date(),
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
