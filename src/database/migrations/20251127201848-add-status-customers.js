'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('customers', 'status',
      {
        type: Sequelize.ENUM('ACTIVE', 'ARCHIVED'),
        allowNull: false,
        defaultValue: 'ACTIVE'
      });

  },

  async down(queryInterface) {

    await queryInterface.removeColumn('customers', 'status');

  }
};
