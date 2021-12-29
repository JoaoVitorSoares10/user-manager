const user = require('../model/user.model');

module.exports = {
    async home(req, res){
        try{
            const data = await user.find();
            return res.json(data);
        }catch(err){
            res.status(400).send("Não foi possivel listar os usuário cadastrados, tente novamente!");
            console.log(err);
        }
    },
    async details(req, res){
        try{
            const data = await user.findOne(req.params);
            return res.json(data);
        }catch(err){
            res.status(400).send("Não foi possivel listar o usuário, tente novamente!");
            console.log(err);
        }
    },
    async register(req, res){
        const userEmail = await user.findOne({email: req.body.email});
        if(!userEmail){
            try{
                const data = await user.create(req.body);
                return res.json(data);
            }catch(err){
                res.status(400).send("Não foi possivel cadastrar o usuário, tente novamente!");
                console.log(err);
            }
        }else{
            res.status(500).send("Email já cadastrado, tente novamente!");
        }
    },
    async delete(req, res){
        try{
            const data = await user.findByIdAndDelete(req.params);
            return res.json(data);
        }catch(err){
            res.status(400).send("Não foi possivel deletar o usuário, tente novamente!");
            console.log(err);
        }
    }, 
    async update(req, res){
        const updateData = {
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            password: req.body.password
        }
        try{
            const data = await user.findOneAndUpdate({_id: req.body._id}, updateData, {new: true});
            return res.json(data);
        }catch(err){
            res.status(400).send("Não foi possivel atualizar o usuário, tente novamente!")
            console.log(err)
        }
    }
}