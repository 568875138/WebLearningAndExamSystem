var express = require('express');
var router = express.Router();
var api = require('./api');
var fileUploader = require("../fileUploader/fileReciever");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/login');
});

router.get('/partials/:name', function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
});

router.get('/login', function (req, res) {
    res.render('index', { title: '自主学习与考试系统' });
});

router.get('/getUserInfo', api.getUserInfo);

router.post('/login', api.loginCheck);

router.get('/logout', api.logout);

router.post('/addUser', api.addUser);

router.post('/getMajorGradesAndClasses', api.getMajorGradesAndClasses);

router.post('/addCourse', api.addCourse);

router.post('/getMyCourses', api.getMyCourses);

router.post('/getCourseInfo', api.getCourseInfo);

router.post('/uploadCourseWares', fileUploader.courseWareUpload.single('file'), api.uploadCourseWares);

router.post('/getCourseWares', api.getCourseWares);

router.get('/getCourseWare', api.getCourseWare);

router.post('/addExerciseBank', api.addExerciseBank);

router.post('/getExerciseBanks', api.getExerciseBanks);

router.post('/addExercise', api.addExercise);

router.post('/getExercise', api.getExercise);

router.post('/submitAndGetAnswer', api.submitAndGetAnswer);

router.post('/getCourseExerciseBanks', api.getCourseExerciseBanks);

router.post('/addExam', api.addExam);

router.post('/getMyExams', api.getMyExams);

router.post('/getExamQuestions', api.getExamQuestions);

router.post('/saveAnswerInExam', api.saveAnswerInExam);

router.get('/getSystemTime', api.getSystemTime);

router.post('/getExamGrades', api.getExamGrades);

router.post('/addMessage', api.addMessage);

router.post('/getMessages', api.getMessages);

router.post('/getMessageDetail', api.getMessageDetail);

router.post('/deleteMessage', api.deleteMessage);

router.post('/messagesNum', api.messagesNum);

router.post('/updateLearningStatus', api.updateLearningStatus);

router.post('/getStuLearningSituation', api.getStuLearningSituation);

router.post('/checkPassword', api.checkPassword);

router.post('/editPassword', api.editPassword);

router.post('/importUsers', fileUploader.excelUpload.single('file'), api.importUsers);

router.post('/getStudents', api.getStudents);

router.post('/getTeachers', api.getTeachers);

router.post('/editStudent', api.editStudent);

router.post('/deleteStudent', api.deleteStudent);

router.post('/resetStudent', api.resetStudent);

router.post('/editTeacher', api.editTeacher);

router.post('/deleteTeacher', api.deleteTeacher);

router.post('/resetTeacher', api.resetTeacher);

router.post('/deleteStudents', api.deleteStudents);

router.post('/deleteTeachers', api.deleteTeachers);

router.post('/deleteCourseWare', api.deleteCourseWare);

router.get('/*', function (req, res, next) {
    if (!req.session.userInfo) {
        res.redirect('/login');
    } else {
        res.render('index', { title: '自主学习与考试系统' });
    }
});

module.exports = router;
