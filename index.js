const path = require("path")
//Importar express
const express = require('express')
//Crear la aplicación web
const sequelize = require('./utils/database')
const app = express()
const blueprint = require('./routes/blueprint')

//Middleware
//app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

app.use(blueprint)

//Lanzar la aplicación para escuchar peticiones
sequelize.sync()
    .then(()=>{
        app.listen(8083,()=>{
            console.log("Aplicación web en línea en el puerto 8083")
    })
    })
    .catch(err=>console.log(err))