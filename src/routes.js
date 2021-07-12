const express = require("express");

const userController = require("./controllers/users");
const commentController = require("./controllers/comments");
const feedController = require("./controllers/feed");
const sessionController = require("./controllers/users");
const profilesController = require("./controllers/profiles");

const routes = express.Router();

//rotas públicas
routes.post("/sessions", sessionController.store);
routes.post("/users", userController.store);

//rotas de perguntas
routes.get("/comments", commentController.index);
routes.post("/comments", commentController.store);

//rotas do feed
routes.get("/feed", feedController.index);

//rotas de categorias
routes.get("/profiles", profilesController.index);

module.exports = routes;
