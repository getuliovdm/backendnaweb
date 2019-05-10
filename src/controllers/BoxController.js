const Box = require('../models/Box'); // Requisitando o Box

class BoxController {

   async store(req,res){ // Lidar com Requisições assincronas
    

    const box = await Box.create({title: req.body.title}); //Por enquanto Estático

    return res.json(box); //  Retornando um JSON e naõ em TEXT como no SEND
    }
    async show(req, res){

        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {sort: {createdAt: -1}}
        });

        return res.json(box);
    } 
}
module.exports = new BoxController();// Já que é uma classe devemos retornar NEW já que eu quero acessar os métodos da classe