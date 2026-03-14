'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movimentacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Solicitacao, { 
        foreignKey: 'id_solicitacao',
        as: 'solicitacao' 
      });
      this.belongsTo(models.Operador, { 
        foreignKey: 'id_operador',
        as: 'operador' 
      });
    }
  }
  Movimentacao.init({
    id_solicitacao: DataTypes.INTEGER,
    id_operador: DataTypes.INTEGER,
    data_movimentacao: DataTypes.DATE,
    status_anterior: DataTypes.STRING,
    status_novo: DataTypes.STRING,
    observacao: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Movimentacao',
  });
  return Movimentacao;
};