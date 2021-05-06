const yup = require('yup');

const lecturerBodySchema = yup.object({
  lecturer_name: yup.string().required(),
});

const lecturerIdParamSchema = yup.object({
  lecturerId: yup.number().integer().positive().required(),
});

module.exports = { lecturerBodySchema, lecturerIdParamSchema }