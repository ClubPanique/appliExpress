var express = require('express');
var router = express.Router();

//Connexion à la base de données.
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "bcojdzqyiumx3surgdjb-mysql.services.clever-cloud.com ",
  user: "uphdcrqawqqyvp4d",
  password: "MLvjodIWXA7KwtUrPxuH",
  database: "bcojdzqyiumx3surgdjb"
});


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mon appli Express' });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query('SELECT * FROM employe WHERE num_service = 30', function(err, result, fields) {
      if (err) throw err;
      res.render('index', { test: result });
    })
  });
  
});

module.exports = router;


