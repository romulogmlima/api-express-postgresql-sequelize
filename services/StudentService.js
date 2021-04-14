const ServiceBuilder = require("./ServiceBuilder");
const { Student } = require('../models');

const StudentService = {
  ...ServiceBuilder(Student),
};

module.exports = StudentService;