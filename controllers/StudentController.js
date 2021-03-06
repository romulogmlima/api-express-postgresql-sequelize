const { Student, Classroom, Course } = require('../models');

const StudentController = {
  list: async (req, res) => {
    try {
      const students = await Student.findAll({
        include: [
          {
            model: Classroom,
            as: 'classroom'
          },
          {
            model: Course,
            as: 'course'
          }
        ],
        order: [
          ['created_at', 'DESC'],
          [{ model: Course, as: 'course' }, 'created_at', 'DESC'],
        ],
      });

      return res.status(200).send(students);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  getById: async (req, res) => {
    try {
      const student = await Student.findByPk(req.params.studentId, {
        include: [
          {
            model: Classroom,
            as: 'classroom'
          },
          {
            model: Course,
            as: 'course'
          }
        ]
      });

      if (!student) {
        return res.status(404).send({ message: 'Student Not Found' });
      }

      return res.status(200).send(student);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  add: async (req, res) => {
    try {
      const student = await Student.create({
        classroom_id: req.body.classroom_id,
        student_name: req.body.student_name,
      });

      return res.status(201).send(student);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  update: async (req, res) => {
    try {
      const student = await Student.findByPk(req.params.studentId);

      if (!student) {
        return res.status(404).send({ message: 'Student Not Found' });
      }

      const [rowsUpdate, [updatedStudent]] = await Student.update(
        {
          student_name: req.body.student_name || student.student_name,
        },
        {
          where: {
            id: req.params.studentId
          },
          returning: true
        }
      );

      return res.status(200).send(updatedStudent);

    } catch (error) {
      return res.status(400).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const student = await Student.findByPk(req.params.studentId);

      if (!student) {
        return res.status(400).send({ message: 'Student Not Found' });
      }

      const numDestroyedRows = await Student.destroy({
        where: {
          id: req.params.studentId
        }
      });

      return res.status(204).send({ count: numDestroyedRows });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

module.exports = StudentController;