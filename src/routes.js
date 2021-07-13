const express = require("express");

const userController = require("./controllers/users");
const commentController = require("./controllers/comments");
const sessionController = require("./controllers/sessions");
const profileController = require("./controllers/profiles");
const equipammentController = require("./controllers/equipaments");

const routes = express.Router();

//rotas públicas
routes.post("/sessions", sessionController.store);

//rotas usuarios
routes.post("/users", userController.store);

//rotas de comentarios
routes.get("/comments", commentController.index);
routes.post("/comments", commentController.store);

//rotas de perfis
routes.get("/profiles", profileController.index);

//rotas de Equipamentos
routes.post("/equipaments", equipammentController.store);
routes.get("/equipaments", equipammentController.index);
routes.delete("/equipaments", equipammentController.delete);

module.exports = routes;
