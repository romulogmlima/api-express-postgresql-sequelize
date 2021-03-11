'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentCourse = sequelize.define('StudentCourse', {
    student_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER
  }, {
    //freezeTableName: true,
    //underscored: true,
    table_name: 'student_course',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
  });
  StudentCourse.associate = function (models) {
    StudentCourse.belongsTo(models.Student, {
      as: "student",
      foreignKey: "student_id",
      targetKey: "id"
    });
    StudentCourse.belongsTo(models.Course, {
      as: "course",
      foreignKey: "course_id",
      targetKey: "id"
    });
  };
  return StudentCourse;
};