const models = require("../models");
const events = models.events;
const favorites = models.favorites;
const users = models.users;


exports.showAll = (req, res) => {
  favorites
    .findAll({
      include: [
        {
          model: events,
          as: "event"
        }
      ],
      where: {
        user_id: req.params.id
      }
    })
    .then(favorites => res.send(favorites));
};
