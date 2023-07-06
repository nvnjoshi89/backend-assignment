// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.bulkInsert(
//       'fiscal_years',
//       [

//         {
//           title: '2022/2023',
//           title_np: '2079/2080',
//           start_date: '2022/07/17',
//           end_date: '2023/07/16',
//           status: 'true',
//           quarter: [{ "asdasd": "asdas" }]
//           ,
//           current_quarter: 'Q1',
//           createdAt: new Date(),
//           updatedAt: new Date(),
//           deletedAt: new Date(),
//         },
//       ],
//       {}
//     );
//   },

//   async down(queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//     await queryInterface.bulkDelete('fiscal_years', null, {});
//   },
// };

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('fiscal_years', [
      {
        title: '2022/2023',
        title_np: '2079/2080',
        start_date: '2022-07-17',
        end_date: '2023-06-16',
        status: 'true',
        quarter: JSON.stringify({
            'Q1': {
              'start_date': '2022/07/17',
              'end_date': '2022/10/17'
            },
            'Q2': {
              'start_date': '2022/10/18',
              'end_date': '2023/01/14'
            },
            'Q3': {
              'start_date': '2023/01/15',
              'end_date': '2023/04/13'
            },
            'Q4': {
              'start_date': '2023/04/14',
              'end_date': '2023/06/16'
            }
        }),
        current_quarter: 'Q4',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('fiscal_years', null, {});
  }
};
