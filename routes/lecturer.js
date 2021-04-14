const { LecturerController } = require("../controllers");

const LecturerRoutes = [
  {
    verb: "get",
    url: "/api/lecturer",
    method: LecturerController.list,
    middlewares: [],
  },
  {
    verb: "get",
    url: "/api/lecturer/:lecturerId",
    method: LecturerController.getById,
    middlewares: [],
  },
  {
    verb: "post",
    url: "/api/lecturer",
    method: LecturerController.add,
    middlewares: [],
  },
  {
    verb: "put",
    url: "/api/lecturer/:lecturerId",
    method: LecturerController.update,
    middlewares: [],
  },
  {
    verb: "delete",
    url: "/api/lecturer/:lecturerId",
    method: LecturerController.delete,
    middlewares: [],
  },
];

module.exports = LecturerRoutes;