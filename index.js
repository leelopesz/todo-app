const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('hablebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/',(requisicao, resposta) => {
    resposta.render('home')
})

app.listen(3006, () => {
   console.log("Servidor rodando na porta 3006") 
})