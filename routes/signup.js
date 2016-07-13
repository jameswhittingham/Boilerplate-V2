var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/todo10', ['signup']);

/* GET All Signups */
router.get('/signups', function(req, res, next) {
	db.signups.find(function(err, signups) {
		if (err) {
			res.send(err);
		} else {
			res.json(signups);
		}
	});
});

/* POST/SAVE a Signup */
router.post('/signup', function(req, res, next) {
	var signup = req.body;
	if (!signup) {

		console.log(signup.text)
		res.status(400);
		res.json({
			"error": "Invalid Data",
			'signup': signup
		});
	} else {
		db.signups.save(signup, function(err, result) {
			if (err) {
				res.send(err);
			} else {
				res.json(result);
			}
		})
	}
});

module.exports = router;