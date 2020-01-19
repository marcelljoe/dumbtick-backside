const jwt = require("jsonwebtoken");
const models = require("../models");
const users = models.users;
const { Op } = require("sequelize");
const hash = require("password-hash");



exports.register = (req, res) => {
  users
    .findOne({
      where: {username: req.body.username}
    })
    .then(users => {
      if (users) {
        res
          .send({
            error: true,
            message:
              "This username has been registered. Choose another username."
          })
          .catch(err => res.send(err));
      } else {
        models.users.create({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email:req.body.email,
        username: req.body.username,
        password: hash.generate(req.body.password),
        img: req.body.img,
        createdAt: Date.now(),
        updatedAt: Date.now()
        })
        .then(users => {
          const token = jwt.sign({ id: users.id }, "ThisIsTheToken");
          const username = users.username;
          const id = users.id;
          const name = users.name;
          res.send({
            message: "success",
            username,
            id,
            name,
            token
          });
        });        
      }
    });
};
