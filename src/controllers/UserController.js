const User = require('../models/Users');

module.exports = {
    async index(req, res) {
        const user = await User.findAll();

        return res.json(user)
    }, 
    
    async store(req, res) {
        const {nome, email} = req.body;
        const user = await User.create({ nome, email });

        return res.json(user)
    }
}