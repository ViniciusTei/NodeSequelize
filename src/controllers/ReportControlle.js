const User = require('../models/Users');
const { Op } = require('sequelize');

module.exports = {
    async show(req, res) {
        const users = await User.findAll({
            attributes: ['nome', 'email'],
            where: {
                email: {
                    [Op.like]: '%@recketseat.com'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'BArbacena' } },
                { 
                    association: 'techs', 
                    where: {
                        name: {
                            [Op.like]: '%react%'
                        }
                    } 
                }
            ]
        })
        
        return res.json(users);
    }
}