// Importando o express router
const express = require("express");
const routes = express.Router();

// Importando o UserController
const ProductController = require("./controllers/UserController");

// Importando o auth.js
const authMidleware = require("./middlewares/auth");

// Rotas
// Usuário
routes.get("/user/info/:id", authMidleware, UserController.info);
routes.get("/user/login", UserController.login);
routes.post("/user/register", UserController.register);
routes.put("/user/update/:id", authMidleware, UserController.update);
routes.delete("/user/remove/:id", authMidleware, UserController.remove);


// Exportando módulo para server.js
module.exports = routes;