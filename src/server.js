const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const cors = require('cors');


const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectRoom', box =>{
        socket.join(box);
    })
})

app.use((req,res, next)=>{
    req.io = io;
    return next();
} );

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-jkkwy.mongodb.net/omnistack?retryWrites=true',{
    useNewUrlParser: true
});

app.use(cors());

// EXPRESS.JSON permite o express receber requisições em formato JSON
app.use(express.json()); //Quero cadastrar um módulo dentro do EXPRESS

app.use(express.urlencoded({extended : true}));
// PERMITE O ENVIO DE ARQUIVOS NAS REQUISIÇÕES

app.use('/files', express.static(path.resolve(__dirname, ".." , "tmp")));

app.use(require('./routes'));
//INDICA O CAMINHO ONDE ESTA O ARQUIVO DAS ROTAS DO SERVIDOR
// . PASTA ATUAL, /routes a pasta onde está as rotas.
// SEM O PONTO O EXPRESS iRá procurar na pasta NODE-MODULES

// PORTA NA QUAL O SERVIDOR NODE ESTÁ RODANDO.
server.listen(process.env.PORT || 4444);