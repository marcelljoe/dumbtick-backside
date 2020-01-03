'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    title: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    price: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    urlMaps: DataTypes.STRING,
    img: DataTypes.STRING,
    createdBy_id: DataTypes.INTEGER
  }, {});
  events.associate = function(models) {
    // associations can be defined here
    events.belongsTo(models.categories, {
      foreignKey: "category_id"
    })
    events.belongsTo(models.users, {
      foreignKey: "createdBy_id"
    })
  };
  return events;
};