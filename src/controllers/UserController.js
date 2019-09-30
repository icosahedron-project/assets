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

    async info(req, res) {
        const user = await User.findById(req.params.id);
        return res.send({
            name: user.name,
            username: user.username
        });
    },

    async login(req, res) {
        const userRequest = {
            username: req.params.username,
            password: req.params.password
        };
        const user = await User.findOne(userRequest, (error, user) => {
            return user;
        });
        return res.send({
            user: user,
            token: generateToken({ id: user.id })
        });
    },

    // Gerando token ao registrar usuário
    async register(req, res) {
        const user = await User.create(req.body);
        return res.send({
            user: user,
            token: generateToken({ id: user.id })
        });
    },

    async update(req, res){
        const user = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        return res.json(user);
    },

    async remove(req, res){
        await User.findOneAndDelete({_id: req.params.id});
        return res.send();    
    }

};