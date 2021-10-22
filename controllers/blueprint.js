const path = require('path')
const PuntoDeInteres = require('../utils/database').models.punto_interes


exports.pais = (req, res)=>{
    PuntoDeInteres.findAll({
        where:{
            pais:req.body.pais
        }
    })
    .then(puntos=>{
        console.log(puntos)
        res.json(puntos)
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"ERROR"})
    })
}

exports.crearPuntoInteres = (req, res)=>{
    PuntoDeInteres.findAll({
        where:{
            lugar_interes:req.body.lugar_interes
        }
        
    }
    
    )
    .then(puntos =>{
        if(puntos[0]){
            const puntosMas = puntos[0].interes + 1
            PuntoDeInteres.update({
                interes: puntosMas,
            },{
                where:{
                    lugar_interes:req.body.lugar_interes
                }
            })
            .then(()=>{
                res.json({estado:"Interes Actualizado"})
            })
            .catch((err)=>{
                res.json({estado:"ERROR"})
            })
        }
        else {
            PuntoDeInteres.create({
                    lugar_interes: req.body.lugar_interes,
                    pais: req.body.pais,
                    descripcion: req.body.descripcion,
                    interes: 1,
            }).then(result=>{
                res.json({
                    estado: "Lugar agregado exitosamente"
                })
            })
            .catch((err)=>{
                console.log(err)
                res.json({estado:"ERROR"})
            })
        }
        
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"ERROR"})
    })
}