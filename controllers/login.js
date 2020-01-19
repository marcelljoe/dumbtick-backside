const jwt = require("jsonwebtoken");

const models = require("../models");
const users = models.users;
const hash = require("password-hash");


exports.login = (req, res) => {
  //check if email and pass match in db tbl user
  users.findOne({ where: { username: req.body.username } })
  .then(users => {
    if (users) {
      const password = users.password;
      const verify = hash.verify(req.body.password, password);
      if (verify === true) {
        const { id, username, name } = users;
        const token = jwt.sign({ id: users.id }, "ThisIsTheTokenBois");
        res.send({
          message: "Login successfully.",
          id,
          username,
          name,
          token,
          error: false
        })
        .catch(err => res.send({
          err,
          message: "Error di verify."
        }));
      } else {
       res.send({
         error: true,
         message: "Wrong Password. Please type your password correctly."
       }); 
      }
    } else {
      res.send({
        error: true,
        message: "Wrong Email or Password!"
      });
    }
  })
  .catch(err => {
    console.log(err)
    res.send({err,message:"Got an error at findOne."})
  });
};
