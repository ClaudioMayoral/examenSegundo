
//Representa a la biblioteca sequelize
const Sequelize = require("sequelize")

//Objeto de Conexion
const sequelize= new Sequelize('user4DB','user4','root',{
    dialect: 'mysql',
    host: '54.198.161.35',
    define:{
        timestamps:false,
        freezeTableName: true
    }
})


//Cargar todos los modelos
const modelDefiners = [
    //importar cada modelo dentro de la carpeta models
    require('../models/puntos_de_interes')

]

//Adherir al objeto de conexion
for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}


//Para poder usar en archivo externos la conexion
module.exports = sequelize;