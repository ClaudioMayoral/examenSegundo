//Creacion de la mini aplicaciones const app = express()
const router = require("express").Router()
const blueprintController = require('../controllers/blueprint')

//generar las rutas

router.get('/pais',blueprintController.pais)

router.post('/puntointeres',blueprintController.crearPuntoInteres)

module.exports = router
