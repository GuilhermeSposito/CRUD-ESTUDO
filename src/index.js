const express = require("express");
const appMajor = express();
const rotas = require("./routes/rotas")

appMajor.use(express.json())
appMajor.use(rotas)

appMajor.listen(3000, () => {
    console.log("Servidor Startado na porta 3000")
})
