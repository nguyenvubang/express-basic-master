var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'FullStack Vietnam' });
// });

// module.exports = router;

/* GET users listing. */
router.get('/', function (req, res, next) {
	var obj;
	fs.readFile('./db/home.json', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		res.render('index', { dataBang: obj});
	});
});

module.exports = router;
