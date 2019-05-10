const mongoose = require('mongoose');
const File = new mongoose.Schema({
title:{
    type: String,
    required: true // Definindo que o Título é Obrigatório
},
path: { //  Caminho para onde o BACKEND irá encontrar o ARquivo
type: String,
require: true
}
}
,
{
timestamps: true, // CREATED AT e UPDATED AT em cada Registro da Tabela
toObject:{virtuals: true},
toJSON: {virtuals: true}
});

// Campo Virtual que não aparece no BANCO
File.virtual('url').get(function(){
    const url = process.env.URL || 'http://localhost:4444'
    return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);