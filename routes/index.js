var express = require('express');
var router = express.Router();

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
  if (!!route.middlewares) {
    middlewares = [...middlewares, ...route.middlewares];
  }
  router[route.verb](route.url, ...middlewares, route.method);
});

module.exports = router;