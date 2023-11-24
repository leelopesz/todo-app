const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/',(requisicao, resposta) => {
    resposta.render('home')
})

const conexao = mysql.createConnection({
    host: "localhost",
    user: "lee",
    password: "04052007le",
    database: "todoapp",
    port: 3306
})

