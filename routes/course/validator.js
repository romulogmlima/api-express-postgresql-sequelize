const yup = require('yup');

const courseBodySchema = yup.object({
  lecturer_id: yup.number().integer().positive().required(),
  course_name: yup.string().required(),
});

const courseIdParamSchema = yup.object({
  courseId: yup.number().integer().positive().required(),
});

module.exports = { courseBodySchema, courseIdParamSchema }