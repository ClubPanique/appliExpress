var express = require('express');
var router = express.Router();

//Connexion à la base de données.
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "alice",
  password: "duWMrwvBgByYveri",
  database: "test"
});

//con.end();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mon appli Express' });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query('SELECT * FROM employe WHERE num_service = 30', function(err, result, fields) {
      if (err) throw err;
      console.log(result);
    })
  });
  /* con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query('SELECT * FROM employe', function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  }); */
});

module.exports = router;


