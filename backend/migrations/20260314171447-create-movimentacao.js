'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movimentacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_solicitacao: {
        type: Sequelize.INTEGER
      },
      id_operador: {
        type: Sequelize.INTEGER
      },
      data_movimentacao: {
        type: Sequelize.DATE
      },
      status_anterior: {
        type: Sequelize.STRING
      },
      status_novo: {
        type: Sequelize.STRING
      },
      observacao: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Movimentacaos');
  }
};