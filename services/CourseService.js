const ServiceBuilder = require("./ServiceBuilder");
const { Course } = require('../models');

const CourseService = {
  ...ServiceBuilder(Course),
};

module.exports = CourseService;