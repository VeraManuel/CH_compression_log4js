const compression = require('compression')
const express = require('express')

const app = express()
const PORT = 8080

app.use(express.urlencoded({urlencoded: false}))
app.use(express.json())

const saludo = 'hola que tal '

// pesa 13kb
app.get("/saludo", (req,res) => {
    res.send(saludo.repeat(1000))
})

app.use(compression())

// despues de compression pesa 300 y algo B
app.get("/saludoZip", (req,res) => {
    res.send(saludo.repeat(1000))
})

app.listen(PORT, () =>{
    console.log('puerto 8080')
})