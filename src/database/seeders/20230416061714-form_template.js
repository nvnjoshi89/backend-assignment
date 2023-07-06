
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('form_templates', [
      {
        loan_categories_id: 9,
        proposal_types_id: 2,
        applicant_types_id: 2,
        appearance_order:3,
        sections: JSON.stringify(
          [
            "General Information",
            "Contact Information",
            "Security Information",
            "Document Upload",
          ]
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('form_templates', null, {});
  }
};
