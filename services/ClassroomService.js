const ServiceBuilder = require("./ServiceBuilder");
const { Classroom } = require('../models');

const ClassroomService = {
  ...ServiceBuilder(Classroom),
};

module.exports = ClassroomService;