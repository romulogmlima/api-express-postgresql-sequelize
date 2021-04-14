const { Classroom, Student } = require('../models');

const ClassroomController = {
  list: async (req, res) => {
    try {
      const classrooms = await Classroom.findAll({
        include: [
          {
            model: Student,
            as: 'student',
          }
        ],
        order: [
          ['created_at', 'DESC'],
          [{ model: Student, as: 'student' }, 'created_at', 'DESC'],
        ]
      });

      return res.status(200).send(classrooms);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  getById: async (req, res) => {
    try {
      const classroom = await Classroom.findByPk(req.params.classroomId, {
        include: [
          {
            model: Student,
            as: 'student',
          }
        ]
      });

      if (!classroom) {
        return res.status(404).send({ message: 'Classroom Not Found' });
      }

      return res.status(200).send(classroom);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  add: async (req, res) => {
    try {
      const classroom = await Classroom.create({
        class_name: req.body.class_name,
      });

      return res.status(201).send(classroom);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  update: async (req, res) => {
    try {
      const classroom = await Classroom.findByPk(req.params.classroomId);

      if (!classroom) {
        return res.status(404).send({ message: 'Classroom Not Found' });
      }

      await classroom.update(
        { class_name: req.body.class_name || classroom.class_name }
      );

      return res.status(200).send(classroom);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const classroom = await Classroom.findByPk(req.params.classroomId);

      if (!classroom) {
        return res.status(400).send({ message: 'Classroom Not Found' });
      }

      await classroom.destroy({
        where: {
          id: req.params.classroomId
        }
      });

      return res.status(204).send();
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

module.exports = ClassroomController;