const { Classroom, Student } = require('../models');

const ClassroomController = {
  list: async (req, res) => {
    return Classroom
      .findAll({
        include: [
          {
            model: Student,
            as: 'student',
            attributes: ['id', 'student_name']
          }
        ],
        order: [
          ['created_at', 'DESC'],
          [{ model: Student, as: 'student' }, 'created_at', 'DESC'],
        ],
        attributes: ['id', 'class_name']
      })
      .then((classrooms) => res.status(200).send(classrooms))
      .catch((error) => { res.status(400).send(error); });
  },
  getById: async (req, res) => {
    return Classroom
      .findByPk(req.params.id, {
        include: [{
          model: Student,
          as: 'student',
          attributes: ['id', 'student_name']
        }],
        attributes: ['id', 'class_name']
      })
      .then((classroom) => {
        if (!classroom) {
          return res.status(404).send({
            message: 'Classroom Not Found',
          });
        }
        return res.status(200).send(classroom);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },
  add: async (req, res) => {
    return Classroom
      .create({
        class_name: req.body.class_name,
      })
      .then((classroom) => res.status(201).send(classroom))
      .catch((error) => res.status(400).send(error));
  },
  update: async (req, res) => {
    return Classroom
      .findByPk(req.params.id, {
        include: [{
          model: Student,
          as: 'student'
        }],
      })
      .then(classroom => {
        if (!classroom) {
          return res.status(404).send({
            message: 'Classroom Not Found',
          });
        }
        return classroom
          .update({
            class_name: req.body.class_name || classroom.class_name,
          })
          .then(() => res.status(200).send(classroom))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete: async (req, res) => {
    return Classroom
      .findByPk(req.params.id)
      .then(classroom => {
        if (!classroom) {
          return res.status(400).send({
            message: 'Classroom Not Found',
          });
        }
        return classroom
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};

module.exports = ClassroomController;