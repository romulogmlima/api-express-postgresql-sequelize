var express = require('express');
var router = express.Router();

const {
  ClassroomController,
  StudentController,
  LecturerController,
  CourseController
} = require('../controllers')


router.get('/api/classroom', ClassroomController.list);
router.get('/api/classroom/:id', ClassroomController.getById);
router.post('/api/classroom', ClassroomController.add);
router.put('/api/classroom/:id', ClassroomController.update);
router.delete('/api/classroom/:id', ClassroomController.delete);


router.get('/api/student', StudentController.list);
router.get('/api/student/:id', StudentController.getById);
router.post('/api/student', StudentController.add);
router.put('/api/student/:id', StudentController.update);
router.delete('/api/student/:id', StudentController.delete);


router.get('/api/lecturer', LecturerController.list);
router.get('/api/lecturer/:id', LecturerController.getById);
router.post('/api/lecturer', LecturerController.add);
router.put('/api/lecturer/:id', LecturerController.update);
router.delete('/api/lecturer/:id', LecturerController.delete);


router.get('/api/course', CourseController.list);
router.get('/api/course/:id', CourseController.getById);
router.post('/api/course', CourseController.add);
router.put('/api/course/:id', CourseController.update);
router.delete('/api/course/:id', CourseController.delete);


module.exports = router;
