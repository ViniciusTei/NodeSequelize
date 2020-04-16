const { Model, DataTypes } = require('sequelize');

class Techs extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        },  {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'techs_id', through: 'user_techs', as: 'users'})
    }
}

module.exports = Techs;