'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "users",
        [
          {
            name: "Marcell Joe",
            phoneNumber: "08123456789",
            email: "mrj@gmail.com",
            username: "marcelljoe",
            password: "marcelljoe",
            img: "myface.png"
          },
          {
            name: "Michelle Prcl",
            phoneNumber: "08123456789",
            email: "mcp@gmail.com",
            username: "chelle",
            password: "chelle",
            img: "myface.png"
          }
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
