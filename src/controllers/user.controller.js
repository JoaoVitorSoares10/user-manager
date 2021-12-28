const user = require('../model/user.model');

module.exports = {
    async register(req, res){
        const userEmail = await user.findOne({email: req.body.email});
        if(!userEmail){
            try{
                const data = await user.create(req.body);
                return res.status(200).json(data);
            }catch(err){
                res.status(404).send("Não foi possivel cadastrar o usuário, tente novamente!");
                console.log(err);
            }
        }else{
            res.status(500).send("Email já cadastrado, tente novamente!")
        }
    }
}