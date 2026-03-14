'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Movimentacao, { 
        foreignKey: 'id_operador',
        as: 'movimentacoes' 
      });
    }
  }
  Operador.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    setor: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Operador',
  });
  return Operador;
};