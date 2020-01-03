require("express-group-routes");

//instantiate express module
const express = require("express");

//use express in app variable
const app = express();
const cors = require('cors')
//init bodyparser
const bodyParser = require("body-parser");
//define the server port
const port = process.env.PORT || 7000;

const CategoryController = require("./controllers/categories");
const UserController = require("./controllers/users");
const EventController = require("./controllers/events");
const OrderController = require("./controllers/orders");
const FavsController = require("./controllers/favorites");
LoginController = require("./controllers/login");
RegistController = require("./controllers/register");

app.use(bodyParser.json());
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Method", "*");
  next();
});

//create the homepage route
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.group("/dumbtick", router => {
  //categories
  router.get("/categories", CategoryController.showAll);
  router.get("/category/:id", CategoryController.showOne);
  router.post("/category", CategoryController.insert);
  
  //Events
  router.get("/events", EventController.showAll);
  router.get("/category/:id/events", EventController.showById);
  router.get("/eventsbytoday", EventController.showByCurDate);
  router.get("/events/:keyword", EventController.search);
  router.get("/eventsupcoming", EventController.showUpcoming);
  router.get("/event/:id/detail", EventController.detail);
  router.post("/addevent", EventController.insert);

  //Buy things
  router.post("/buy", OrderController.buy);
  router.post("/paymentpending", OrderController.showByBuyer);
  router.post("/paymentconfirmed", OrderController.showConfirmed);
  router.put("/pay/:id", OrderController.pay);

  //Favorites
  router.get("/profile/:id/favorites", FavsController.showAll);
  
  //UserControl
  router.get("/profile/:id", UserController.showOne);
  router.put("/profile/:id/edit", UserController.editUser);
  
  //Login
  router.post("/login", LoginController.login);
  
  //Regist
  router.post("/register", RegistController.register);
});

//when the nodejs app exed, make it lesten the port
app.listen(port, () => console.log(`Listening on port ${port}!`));
