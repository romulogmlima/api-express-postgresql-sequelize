const { CourseController } = require("../../controllers");

const CourseRoutes = [
  {
    verb: "get",
    url: "/api/course",
    method: CourseController.list,
    middlewares: [],
  },
  {
    verb: "get",
    url: "/api/course/:courseId",
    method: CourseController.getById,
    middlewares: [],
  },
  {
    verb: "post",
    url: "/api/course",
    method: CourseController.add,
    middlewares: [],
  },
  {
    verb: "put",
    url: "/api/course/:courseId",
    method: CourseController.update,
    middlewares: [],
  },
  {
    verb: "delete",
    url: "/api/course/:courseId",
    method: CourseController.delete,
    middlewares: [],
  },
];

module.exports = CourseRoutes;

