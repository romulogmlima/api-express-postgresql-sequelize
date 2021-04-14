const { StudentController } = require("../controllers");

const StudentRoutes = [
  {
    verb: "get",
    url: "/api/student",
    method: StudentController.list,
    middlewares: [],
  },
  {
    verb: "get",
    url: "/api/student/:studentId",
    method: StudentController.getById,
    middlewares: [],
  },
  {
    verb: "post",
    url: "/api/student",
    method: StudentController.add,
    middlewares: [],
  },
  {
    verb: "put",
    url: "/api/student/:studentId",
    method: StudentController.update,
    middlewares: [],
  },
  {
    verb: "delete",
    url: "/api/student/:studentId",
    method: StudentController.delete,
    middlewares: [],
  },
];

module.exports = StudentRoutes;