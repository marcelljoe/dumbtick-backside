const jwt = require("jsonwebtoken");

const models = require("../models");
const users = models.users;


exports.login = (req, res) => {
  //check if email and pass match in db tbl user
  const username = req.body.username;
  const password = req.body.password; //use encryption in real world case!
  users.findOne({ where: { username, password } }).then(users => {
    if (users) {
      const id = users.id
      const username = users.username
      const token = jwt.sign({ id: users.id }, "ThisIsTheTokenBois");
      const name = users.name
      res.send({
        message: "success",
        id,
        username,
        name,
        token,
        error:false
      });
    } else {
      res.send({
        error: true,
        message: "Wrong Email or Password!"
      });
    }
  });
};
