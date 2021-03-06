const Sequelize = require("sequelize")

const PuntoDeInteres = (sequelize)=>{
    sequelize.define('punto_interes',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        lugar_interes:Sequelize.STRING,
        pais:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        interes:{
            type:Sequelize.INTEGER,
            allowNull: false,
        }
    })     
    
}

module.exports = PuntoDeInteres