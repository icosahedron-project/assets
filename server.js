// Importando Dependências
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// Iniciando o App , habilitando recebimento de json e usando o cors
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/icosahedron-core",
 {useNewUrlParser: true, useUnifiedTopology: true});

// Definindo os Models
requireDir("./src/models");

// Prefixo e Importando routes.js
app.use("/service/rest", require("./src/routes"));

// Definindo Porta localhost
app.listen(3001);