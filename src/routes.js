const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const routes = express.Router();
 
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');
// GET/POST/PUT/DELETE da arquitetura RESTFULL
// GET : BUSCAR INFORMAÇÂO
// POST : CRIAR ALGO
// PUT : MODIFICAR
// DELETE : DELETAR

routes.post("/boxes", BoxController.store);

routes.get("/boxes/:id", BoxController.show);


routes.post("/boxes/:id/files",multer(multerConfig).single('file'),FileController.store);

// Cria uma rota que o usuário vai poder acessar, o parametro em aspas
routes.get('/teste',(req, res) => {
    // Funções que recebem req,res são chamadas de midleware
    // Um dos parâmetros do EXPRESS para retornar uma resposta
    // e tratar a requisição.
    // MIdleware também são chamados de interceptadores de Requisição

    return res.send('Hello World Rocket');
});

routes.get('/DanielAndrade', (Ualisson, Leo)=>{
    return Leo.send('ROMULO GADELHA');
})



module.exports = routes;
// EXPOE e EXPORTA alguma informação do arquivo PARA o server.js
// ./routes irá receber a variável routes criada nesse arquivo.