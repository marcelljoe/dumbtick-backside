'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "events",
        [
          {
            title: "Raisa",
            category_id: 2,
            startTime: "2019-12-30 18:00:00",
            endTime: "2019-12-31 23:00:00",
            price: "200000",
            description: "Ini description untuk Raisa",
            address: "jl. jalan",
            urlMaps: "inilinkmap",
            img: "iniimage.png",
            createdBy_id: 1
          },
          {
            title: "Mark Zuckerberg",
            category_id: 4,
            startTime: "2020-01-05 17:00:00",
            endTime: "2020-01-09 22:00:00",
            price: "300000",
            description: "Ini description untuk Mark Zuckerberg",
            address: "jl. raya",
            urlMaps: "inilinkmap",
            img: "iniimage.png",
            createdBy_id: 2
          },
          {
            title: "Dumbways.ID Batch #93",
            category_id: 4,
            startTime: "2040-01-05 10:00:00",
            endTime: "2040-01-11 22:00:00",
            price: "300000",
            description: "Ini description untuk Bootcamp Dumbways.id",
            address: "jl. Bintaro",
            urlMaps: "inilinkmap",
            img: "iniimage.png",
            createdBy_id: 1
          },
          {
            title: "Google Loon",
            category_id: 3,
            startTime: "2019-12-28 17:00:00",
            endTime: "2019-12-29 22:00:00",
            price: "300000",
            description: "Ini description untuk Project Google Loon",
            address: "jl. Udara",
            urlMaps: "inilinkmap",
            img: "iniimage.png",
            createdBy_id: 2
          },
          {
            title: "Djakarta Warehouse Project",
            category_id: 2,
            startTime: "2019-12-28 18:00:00",
            endTime: "2019-12-31 23:59:59",
            price: "180000",
            description: "Ini description untuk Dugem World Project",
            address: "jl. Pancoran",
            urlMaps: "inilinkmap",
            img: "iniimage.png",
            createdBy_id: 1
          },
          {
            title: "Electronic Entertainment Expo",
            category_id: 1,
            startTime: "2020-07-15 12:00:00",
            endTime: "2020-07-17 23:59:59",
            price: "120000",
            description: "Ini description untuk Event E3",
            address: "jl. GBK",
            urlMaps: "inilinkmap",
            img: "iniimage.png",
            createdBy_id: 1
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
