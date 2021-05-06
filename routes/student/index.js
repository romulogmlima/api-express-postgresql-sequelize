const { StudentController } = require("../../controllers");
const {studentBodySchema, studentIdParamSchema} = require('./validator');

const StudentRoutes = [
  {
    verb: "get",
    url: "/api/student",
    method: StudentController.list,
    schemas: {},
    middlewares: [],
  },
  {
    verb: "get",
    url: "/api/student/:studentId",
    method: StudentController.getById,
    schemas: {params : studentIdParamSchema},
    middlewares: [],
  },
  {
    verb: "post",
    url: "/api/student",
    method: StudentController.add,
    schemas: {body: studentBodySchema},
    middlewares: [],
  },
  {
    verb: "put",
    url: "/api/student/:studentId",
    method: StudentController.update,
    schemas: {params : studentIdParamSchema},
    middlewares: [],
  },
  {
    verb: "delete",
    url: "/api/student/:studentId",
    method: StudentController.delete,
    schemas: {params : studentIdParamSchema},
    middlewares: [],
  },
];

module.exports = StudentRoutes;