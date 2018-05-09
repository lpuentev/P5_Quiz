var express = require('express');
var router = express.Router();
const {models} = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index',{ title: 'P5_Quiz' });
});
router.get('/credits', function(req, res, next) {
  res.render('credits');
});

router.get('/quizzes', function(req, res, next) {

    models.quiz.findAll()
        .then( array => {
            res.render('quizzes/index', { quizzes: array})

        })
        .catch( error => {
            console.log(error.message)
        });

});

module.exports = router;