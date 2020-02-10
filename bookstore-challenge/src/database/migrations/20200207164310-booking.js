'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bookings', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      book_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      withdraw_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      delivery_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {

    return queryInterface.dropTable('bookings');

  }
};
