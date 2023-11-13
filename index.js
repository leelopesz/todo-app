const express = require("express")

const app = express()

app.get('/',(requisicao, resposta) => {
    resposta.send("Olá, mundo!")
})

app.listen(3007, () => {
   console.log("Servidor rodando na porta 3006") 
})