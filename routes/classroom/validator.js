const yup = require('yup');

const classroomBodySchema = yup.object({
  class_name: yup.string().required(),
});

const classroomIdParamSchema = yup.object({
  classroomId: yup.number().integer().positive().required(),
});

module.exports = { classroomBodySchema, classroomIdParamSchema }