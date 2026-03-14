'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anexo extends Model {
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
    }
  }
  Anexo.init({
    id_solicitacao: DataTypes.INTEGER,
    nome_arquivo: DataTypes.STRING,
    tipo_arquivo: DataTypes.STRING,
    caminho_arquivo: DataTypes.STRING,
    data_upload: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Anexo',
  });
  return Anexo;
};