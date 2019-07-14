const express = require('express');
const bodyParse=require('body-parser')
const bodyParserMidllware=bodyParse.json()
const router = express.Router();
const {Api,Login}=require('../controller/user')
const {Getbannerlist,List} =require('../controller/banner')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api',Api)

router.post('/login',bodyParserMidllware , Login)

router.get('/getbannerlist',Getbannerlist)

router.get('/getlistdata',List)
module.exports = router;
