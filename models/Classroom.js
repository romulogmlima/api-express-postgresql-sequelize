'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classroom = sequelize.define('Classroom', {
    class_name: DataTypes.STRING
  }, {
    //freezeTableName: true,
    //underscored: true,
    tableName: "classroom",
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
  });
  Classroom.associate = function(models) {
    Classroom.hasMany(models.Student, {
      foreignKey: 'classroom_id',
      as: 'student',
    });
  };
  return Classroom;
};