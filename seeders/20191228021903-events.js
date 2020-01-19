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
            createdBy_id: 1
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
            createdBy_id: 1
          },
          {
            title: "Djakarta Warehouse Project",
            category_id: 2,
            startTime: "2019-12-28 18:00:00",
            endTime: "2019-12-31 23:59:59",
            price: "180000",
            description: "Ini description untuk Dugem World Project",
            address: "jl. Pancoran",
            urlMaps:
              "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7931.828278429471!2d106.72135417850288!3d-6.2750194514481255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa6255555555%3A0x83f994af5841af4f!2sCinema%20XXI%20Lotte%20Mall!5e0!3m2!1sen!2sid!4v1577791185118!5m2!1sen!2sid' width='400' height='300' frameborder='0' style={{alignSelf: 'center'}} ></iframe>",
            img:
              "https://mmc.tirto.id/image/2019/12/11/poster--dwp_ratio-16x9.jpg",
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
