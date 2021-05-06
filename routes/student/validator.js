const yup = require('yup');

const studentBodySchema = yup.object({
  classroom_id: yup.number().integer().positive().required(),
  student_name: yup.string().required(),
});

const studentIdParamSchema = yup.object({
  studentId: yup.number().integer().positive().required(),
});

module.exports = { studentBodySchema, studentIdParamSchema }