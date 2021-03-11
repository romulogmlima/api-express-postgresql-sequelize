const { Course, Student, Lecturer } = require('../models');

const CourseController = {
  list: async (req, res) => {
    return Course
      .findAll({
        include: [
          {
            model: Student,
            as: 'student'
          },
          {
            model: Lecturer,
            as: 'lecturer'
          }
        ],
        order: [
          ['created_at', 'DESC'],
          [{ model: Student, as: 'student' }, 'created_at', 'DESC'],
        ],
      })
      .then((courses) => res.status(200).send(courses))
      .catch((error) => { res.status(400).send(error); });
  },
  getById: async (req, res) => {
    return Course
      .findByPk(req.params.id, {
        include: [
          {
            model: Lecturer,
            as: 'lecturer'
          }
        ],
      })
      .then((course) => {
        if (!course) {
          return res.status(404).send({
            message: 'Course Not Found',
          });
        }
        return res.status(200).send(course);
      })
      .catch((error) => res.status(400).send(error));
  },
  add: async (req, res) => {
    return Course
      .create({
        lecturer_id: req.body.lecturer_id,
        course_name: req.body.course_name,
      })
      .then((course) => res.status(201).send(course))
      .catch((error) => res.status(400).send(error));
  },
  update: async (req, res) => {
    return Course
      .findByPk(req.params.id)
      .then(course => {
        if (!course) {
          return res.status(404).send({
            message: 'Course Not Found',
          });
        }
        return course
          .update({
            course_name: req.body.course_name || classroom.course_name,
          })
          .then(() => res.status(200).send(course))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete: async (req, res) => {
    return Course
      .findByPk(req.params.id)
      .then(course => {
        if (!course) {
          return res.status(400).send({
            message: 'Course Not Found',
          });
        }
        return course
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};

module.exports = CourseController;