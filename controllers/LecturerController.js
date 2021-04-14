const { Lecturer, Course } = require('../models');

const LecturerController = {
  list: async (req, res) => {
    try {
      const lecturers = await Lecturer.findAll({
        include: [
          {
            model: Course,
            as: 'course'
          }
        ],
        order: [
          ['created_at', 'DESC'],
          [{ model: Course, as: 'course' }, 'created_at', 'DESC'],
        ]
      });

      return res.status(200).send(lecturers);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  getById: async (req, res) => {
    try {
      const lecturer = await Lecturer.findByPk(req.params.lecturerId, {
        include: [
          {
            model: Course,
            as: 'course'
          }
        ]
      });

      if (!lecturer) {
        return res.status(404).send({ message: 'Lecturer Not Found' });
      }

      return res.status(200).send(lecturer);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  add: async (req, res) => {
    try {
      const lecturer = await Lecturer.create({
        lecturer_name: req.body.lecturer_name,
      });

      return res.status(201).send(lecturer);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  update: async (req, res) => {
    try {
      const lecturer = await Lecturer.findByPk(req.params.lecturerId);

      if (!lecturer) {
        return res.status(404).send({ message: 'Lecturer Not Found' });
      }

      await lecturer.update(
        {
          lecturer_name: req.body.lecturer_name || lecturer.lecturer_name,
        }
      );

      return res.status(200).send(lecturer);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const lecturer = await Lecturer.findByPk(req.params.lecturerId);

      if (!lecturer) {
        return res.status(400).send({ message: 'Lecturer Not Found' });
      }

      await lecturer.destroy({
        where: {
          id: req.params.lecturerId
        }
      });

      return res.status(204).send()
    } catch (error) {
      return res.status(400).send(error);
    }
  },
}

module.exports = LecturerController;