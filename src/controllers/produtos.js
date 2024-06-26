//const knex = require("knex");
const _DB = require("../data/kenx")

const GetProdutos = async (req, res) => {
    try {
        const produtos = await _DB("produtos");

        return res.status(200).json(produtos);

    } catch (error) {
        console.log(error)
    }
}

const PostProduto = async (req, res) => {
    try {
        const { nome, descricao, valor } = req.body

        const produtoInserido = await _DB("produtos").insert({ nome, descricao, valor }).returning("*")

        return res.status(201).json(produtoInserido)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    GetProdutos,
    PostProduto
}