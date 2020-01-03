const jwt = require("jsonwebtoken");

const models = require("../models");
const events = models.events;
const categories = models.categories;
const users = models.users;
const { Op } = require("sequelize");

var startDate = new Date();
var endDate = new Date();
endDate.setDate(new Date().getDate() + 1);

exports.showAll = (req, res) => {
  users.findAll({}).then(users => res.send(users));
};

exports.showOne = (req, res) => {
  users
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(users => res.send(users));
};

exports.editUser = (req, res) => {
    users
      .update(
        {
          name: req.body.name,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          dob: req.body.dob
        }
        // req.body
        ,
        {
          where: { id: req.params.id }
        }
      )
      .then(users => {
        const token = jwt.sign({ id: users.id }, "ThisIsTheToken");
        const name = req.body.name;
        res.send({
          message: "success",
          name,
          token
        });
      });
}