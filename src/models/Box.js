const mongoose = require('mongoose');
const Box = new mongoose.Schema({
title:{
    type: String,
    required: true // Definindo que o Título é Obrigatório
},
files:[{type: mongoose.Schema.Types.ObjectId, ref:"File"}] // Lista de Arquivos será um VETOR, Porém será um Vetor de outro MODEL
}, {
timestamps: true // CREATED AT e UPDATED AT em cada Registro da Tabela
});

module.exports = mongoose.model("Box", Box);