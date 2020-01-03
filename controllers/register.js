const jwt = require("jsonwebtoken");

const models = require("../models");
const users = models.users;


exports.register = (req, res) => {
  //check if email and pass match in db tbl user
  users.create(req.body).then(users => {
      const token = jwt.sign({ id: users.id }, "ThisIsTheToken");
      const username = users.username;
      const id = users.id;
      const name = users.name
      res.send({
        message: "success",
        username,
        id,
        name,
        token
      });
  });
};

exports.register2 = (req, res) => {
  const email = req.body.email;
  users
    .findOne({ where: { email } })
    .then(users => {
      if (users) {
        res.send({
          error: true,
          message: "Email already registered! Login instead."
        });
      } else {
        users
        .create(req.body).then(users => {
        
          const email = users.email;
          const name = users.fullname;
          res.send({
            users,
            email,
            name
          });
        });
      }
    })
    .catch(err => res.send(err));
}