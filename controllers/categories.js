const models = require("../models");
const categories = models.categories;

exports.showAll = (req, res) => {
  categories.findAll({}).then(categories => res.send(categories));
};

exports.showOne = (req, res) => {
  categories
    .findOne({ where:{id: req.params.id}})
    .then(categories => res.send(categories));
};

exports.insert = (req, res) => {
  categories.create(req.body).then(categories => {
    res.send({
      message: "success",
      categories
    });
  });
};
