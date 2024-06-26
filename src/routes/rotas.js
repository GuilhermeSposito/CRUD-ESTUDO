const express = require("express");
const app = express();
const { GetProdutos, PostProduto } = require("../controllers/produtos")

app.get("/api/v1/produtos", GetProdutos)
app.post("/api/v1/produto", PostProduto)


module.exports = app
