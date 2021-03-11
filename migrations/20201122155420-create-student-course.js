'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('student_course', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "student",
          key: "id",
        },
      },
      course_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "course",
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('student_course');
  }
};