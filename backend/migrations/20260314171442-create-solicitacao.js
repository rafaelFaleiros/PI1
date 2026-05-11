'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Solicitacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero_protocolo: {
        type: Sequelize.STRING
      },
      data_solicitacao: {
        type: Sequelize.DATE
      },
      local_ocorrencia: {
        type: Sequelize.STRING
      },
      data_ocorrencia: {
        type: Sequelize.DATE
      },
      hora_ocorrencia: {
        type: Sequelize.STRING
      },
      descricao_ocorrencia: {
        type: Sequelize.TEXT
      },
      status_atual: {
        type: Sequelize.STRING
      },
      id_requerente: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Solicitacaos');
  }
};