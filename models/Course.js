'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    lecturer_id: DataTypes.INTEGER,
    course_name: DataTypes.STRING
  }, {
    //freezeTableName: true,
    //underscored: true,
    tableName: "course",
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
  });
  Course.associate = function (models) {
    Course.belongsToMany(models.Student, {
      through: 'student_course',
      as: 'student',
      foreignKey: 'course_id'
    });
    Course.belongsTo(models.Lecturer, {
      foreignKey: 'lecturer_id',
      as: 'lecturer'
    });
  };
  return Course;
};