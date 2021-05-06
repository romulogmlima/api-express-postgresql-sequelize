const { LecturerController } = require("../../controllers");
const {lecturerBodySchema, lecturerIdParamSchema} = require('./validator');

const LecturerRoutes = [
  {
    verb: "get",
    url: "/api/lecturer",
    method: LecturerController.list,
    schemas: {},
    middlewares: [],
  },
  {
    verb: "get",
    url: "/api/lecturer/:lecturerId",
    method: LecturerController.getById,
    schemas: {params: lecturerIdParamSchema},
    middlewares: [],
  },
  {
    verb: "post",
    url: "/api/lecturer",
    method: LecturerController.add,
    schemas: {body: lecturerBodySchema},
    middlewares: [],
  },
  {
    verb: "put",
    url: "/api/lecturer/:lecturerId",
    method: LecturerController.update,
    schemas: {params: lecturerIdParamSchema},
    middlewares: [],
  },
  {
    verb: "delete",
    url: "/api/lecturer/:lecturerId",
    method: LecturerController.delete,
    schemas: {params: lecturerIdParamSchema},
    middlewares: [],
  },
];

module.exports = LecturerRoutes;