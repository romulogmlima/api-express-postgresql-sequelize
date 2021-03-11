'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    classroom_id: DataTypes.INTEGER,
    student_name: DataTypes.STRING
  }, {
    //freezeTableName: true,
    //underscored: true,
    tableName: 'student',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
  });
  Student.associate = function (models) {
    Student.belongsTo(models.Classroom, {
      foreignKey: 'classroom_id',
      as: 'classroom'
    });
    Student.belongsToMany(models.Course, {
      through: 'student_course',
      as: 'course',
      foreignKey: 'student_id'
    });
  };
  return Student;
};