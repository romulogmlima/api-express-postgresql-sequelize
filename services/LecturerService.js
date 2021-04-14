const ServiceBuilder = require("./ServiceBuilder");
const { Lecturer } = require('../models');

const LecturerService = {
  ...ServiceBuilder(Lecturer),
};

module.exports = LecturerService;