# examenSegundo
Para correr los EP se requiere usar las siguientes ligas y body's

POST http://localhost:8083/puntointeres
{
    "lugar_interes":"MIT",
    "pais":"Estados Unidos",
    "descripcion":"Escuela"
}

GET http://localhost:8083/pais
{
    "pais": "Estados Unidos"
}
