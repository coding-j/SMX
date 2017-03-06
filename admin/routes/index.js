var express = require('express');
var router = express.Router();
var api = require('../api/api')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/course',function (req,res,next) {
  api.getCourse(function (courseList) {
    console.log("course:"+JSON.stringify(courseList));
    res.render('course',{courseList:courseList})
  })
});
router.get('/question',function (req,res) {
  api.getQuestion(function(questionList){
    questionList = {questionList:questionList};
    console.log('questionList:'+JSON.stringify(questionList));
    res.render('question',questionList)
  })
});
router.get('/studentlist',function (req,res) {
    api.getStudent(function(studentList){
        console.log("student:"+JSON.stringify(studentList));
        res.render('studentlist',{studentList:studentList})
    })
});
router.get('/teacherlist',function (req,res) {
    api.getTeacher(function(teacherList){
        console.log("teacher:"+JSON.stringify(teacherList));
        res.render('teacherlist',{teacherList:teacherList})
    })
});


module.exports = router;
