'use strict'

const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')


app.set('port', 4000)

app.use(morgan('dev'))
//app.use(body-bodyparser.urlencoded({extended:true}))
//app.use(body-parser.json())
// start server

//Rutas
const ruta1 = require('./routes/prueba.route') 
app.use('/api/',ruta1)

app.listen(app.get('port'),()=>{
    console.log('escuchandoooo por el puerto', app.get('port'))
})