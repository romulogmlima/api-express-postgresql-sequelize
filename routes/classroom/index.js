const { ClassroomController } = require("../../controllers");

const ClassroomRoutes = [
  {
    verb: "get",
    url: "/api/classroom",
    method: ClassroomController.list,
    middlewares: [],
  },
  {
    verb: "get",
    url: "/api/classroom/:classroomId",
    method: ClassroomController.getById,
    middlewares: [],
  },
  {
    verb: "post",
    url: "/api/classroom",
    method: ClassroomController.add,
    middlewares: [],
  },
  {
    verb: "put",
    url: "/api/classroom/:classroomId",
    method: ClassroomController.update,
    middlewares: [],
  },
  {
    verb: "delete",
    url: "/api/classroom/:classroomId",
    method: ClassroomController.delete,
    middlewares: [],
  },
];


module.exports = ClassroomRoutes;

