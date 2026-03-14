'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Anexos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_solicitacao: {
        type: Sequelize.INTEGER
      },
      nome_arquivo: {
        type: Sequelize.STRING
      },
      tipo_arquivo: {
        type: Sequelize.STRING
      },
      caminho_arquivo: {
        type: Sequelize.STRING
      },
      data_upload: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Anexos');
  }
};