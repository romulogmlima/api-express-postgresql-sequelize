'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lecturer = sequelize.define('Lecturer', {
    lecturer_name: DataTypes.STRING
  }, {
    //freezeTableName: true,
    //underscored: true,
    tableName: "lecturer",
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
  });
  Lecturer.associate = function(models) {
    Lecturer.hasOne(models.Course, {
      foreignKey: 'lecturer_id',
      as: 'course',
    });
  };
  return Lecturer;
};