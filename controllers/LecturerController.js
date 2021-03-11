const { Lecturer, Course } = require('../models');

const LecturerController = {
  list: async (req, res) => {
    return Lecturer
      .findAll({
        include: [{
          model: Course,
          as: 'course',
          attributes: ['id', 'course_name']
        }],
        attributes: ['id', 'lecturer_name'],
        order: [
          ['created_at', 'DESC'],
          [{ model: Course, as: 'course' }, 'created_at', 'DESC'],
        ]
      })
      .then((lecturers) => res.status(200).send(lecturers))
      .catch((error) => { res.status(400).send(error); });
  },
  getById: async (req, res) => {
    return Lecturer
      .findByPk(req.params.id, {
        include: [{
          model: Course,
          as: 'course',
          attributes: ['id', 'course_name']
        }],
        attributes: ['id', 'lecturer_name']
      })
      .then((lecturer) => {
        if (!lecturer) {
          return res.status(404).send({
            message: 'Lecturer Not Found',
          });
        }
        return res.status(200).send(lecturer);
      })
      .catch((error) => res.status(400).send(error));
  },
  add: async (req, res) => {
    return Lecturer
      .create({
        lecturer_name: req.body.lecturer_name,
      })
      .then((lecturer) => res.status(201).send(lecturer))
      .catch((error) => res.status(400).send(error));
  },
  update: async (req, res) => {
    return Lecturer
      .findByPk(req.params.id, {
        include: [{
          model: Course,
          as: 'course'
        }],
      })
      .then(lecturer => {
        if (!lecturer) {
          return res.status(404).send({
            message: 'Lecturer Not Found',
          });
        }
        return lecturer
          .update({
            lecturer_name: req.body.lecturer_name || classroom.lecturer_name,
          })
          .then(() => res.status(200).send(lecturer))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete: async (req, res) => {
    return Lecturer
      .findByPk(req.params.id)
      .then(lecturer => {
        if (!lecturer) {
          return res.status(400).send({
            message: 'Lecturer Not Found',
          });
        }
        return lecturer
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
}

module.exports = LecturerController;