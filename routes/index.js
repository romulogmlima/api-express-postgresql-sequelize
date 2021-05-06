var express = require('express');
var router = express.Router();
const validateResource = require("../middlewares/validateResource");

const ClassroomRoutes = require("./classroom");
const CourseRoutes = require("./course");
const LecturerRoutes = require("./lecturer");
const StudentRoutes = require("./student");

const AppRoutes = [
  ...ClassroomRoutes,
  ...CourseRoutes,
  ...LecturerRoutes,
  ...StudentRoutes
];

AppRoutes.forEach((route) => {
  let middlewares = []; // list of global middlewares

  if (!!route.schemas) {
    if (route.schemas.body)
      middlewares = [...middlewares, validateResource(route.schemas.body, "body")];
    if (route.schemas.query)
      middlewares = [...middlewares, validateResource(route.schemas.query, "query")];
    if (route.schemas.params)
      middlewares = [...middlewares, validateResource(route.schemas.params, "params")];
  }

  if (!!route.middlewares) {
    middlewares = [...middlewares, ...route.middlewares];
  }
  router[route.verb](route.url, ...middlewares, route.method);
});

module.exports = router;