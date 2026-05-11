'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Solicitacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacionamento com Requerente
      this.belongsTo(models.Requerente, { 
        foreignKey: 'id_requerente',
        as: 'requerente' 
      });
      // Relacionamento com Anexos (Vídeos/Fotos)
      this.hasMany(models.Anexo, { 
        foreignKey: 'id_solicitacao',
        as: 'anexos' 
      });
      // Relacionamento com Movimentações (Histórico)
      this.hasMany(models.Movimentacao, { 
        foreignKey: 'id_solicitacao',
        as: 'historico' 
      });
    }
  }
  Solicitacao.init({
    numero_protocolo: DataTypes.STRING,
    data_solicitacao: DataTypes.DATE,
    local_ocorrencia: DataTypes.STRING,
    data_ocorrencia: DataTypes.DATE,
    hora_ocorrencia: DataTypes.STRING,
    descricao_ocorrencia: DataTypes.TEXT,
    status_atual: DataTypes.STRING,
    id_requerente: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Solicitacao',
    tableName: 'Solicitacaos', // <--- Use exatamente como apareceu no \dt
    freezeTableName: true,      // <--- Adicione isso para ele parar de tentar pluralizar sozinho
  });
  return Solicitacao;
};