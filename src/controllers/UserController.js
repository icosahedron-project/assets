// Importando o mongoose
const mongoose = require("mongoose");

// Importando o User.js
const User = mongoose.model("User");

// Importando o jwt e o secret
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

// Gerando Token
function generateToken(params = {}) {
    // Validade: uma semana
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 60 * 60 * 24 * 7
    });
}

// Exportando lógicas de negócio (requisições assíncronas) para routes.js
module.exports = {
    // TO-DO business logic

};