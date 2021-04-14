const { Course, Student, Lecturer } = require('../models');

const CourseController = {
  list: async (req, res) => {
    try {
      const courses = await Course.findAll({
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
      });

      return res.status(200).send(courses);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  getById: async (req, res) => {
    try {
      const course = await Course.findByPk(req.params.courseId, {
        include: [
          {
            model: Lecturer,
            as: 'lecturer'
          }
        ],
      });

      if (!course) {
        return res.status(404).send({ message: 'Course Not Found' });
      }

      return res.status(200).send(course);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  add: async (req, res) => {
    try {
      const course = await Course.create({
        lecturer_id: req.body.lecturer_id,
        course_name: req.body.course_name,
      });

      return res.status(201).send(course);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  update: async (req, res) => {
    try {
      const course = await Course.findByPk(req.params.courseId);

      if (!course) {
        return res.status(404).send({ message: 'Course Not Found' });
      }

      await course.update(
        {
          course_name: req.body.course_name || course.course_name
        }
      );

      return res.status(200).send(course);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const course = await Course.findByPk(req.params.courseId);

      if (!course) {
        return res.status(400).send({ message: 'Course Not Found' });
      }

      const numDestroyedRows = await Course.destroy({
        where: {
          id: req.params.courseId
        }
      });

      return res.status(204).send({ count: numDestroyedRows });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

module.exports = CourseController;