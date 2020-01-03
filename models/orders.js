'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    buyer_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    status: DataTypes.STRING,
    attachment: DataTypes.STRING
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
    orders.belongsTo(models.users, {
      foreignKey: "buyer_id"
    });

    orders.belongsTo(models.events, {
      foreignKey: "event_id"
    });
  };
  return orders;
};