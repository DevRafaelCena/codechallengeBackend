'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING(192),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(192),
        allowNull: false
      },    
      responsavel: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      alteracoes: {
        type: Sequelize.INTEGER(2),
        allowNull: false
      },   
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tasks')
  }
};