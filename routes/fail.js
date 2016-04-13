var express = require('express');
var router = express.Router();
var Fail = require('../models/fail');

router.route('/fail')
	.post(function(req,res) {
		var auth = req.user ? req.user._id : "570e8547c46324e733cb06df"
		var fail = new Fail ({
			
			title: req.body.title,
			challenge: req.body.challenge,
			img: req.body.img,
			icon: req.body.icon,

		});
		console.log(fail);
		fail.save(function(err, fail) {
			if(err) {
				res.status(500).send(err, "Failed on the Save Route");
			} else {
				res.json(fail)
			}
		})
	})

	.get(function(req, res) {
		Fail.find()
		.populate('author')
		.populate('comments')
		.exec(function(err, fails) {
			if(err) {
				console.log(err)
			} else {
				res.json(fail)
			}
		})
	});

router.route('/fail/:fail_id')
	.get(function(req, res) {
		Fail.findById(req.params.fail_id)
			.populate({
				path: 'comments',
				populate: {
					path: 'user',
					select: 'local.username'
				}
			})
			.exec(function(err, fail) {
				if (err) {
					console.log(err)
				}else {
					res.json(fail)
				}
			})
	})

	.put(function(req, res) {
		Fail.findById(req.params.fail._id, function(err, fail) {
			if(err) {
				console.log(err)
			} else {
				 fail.title = req.body.title ? req.body.title : fail.title;
	       fail.challenge = req.body.challenge ? req.body.challenge : fail.challenge;
	       fail.image = req.body.image ? req.body.image : fail.image;
	       fail.rating = req.body.rating ? req.body.rating : fail.rating;
	       fail.category = req.body.category ? req.body.category : fail.category;
	       fail.icon = req.body.icon ? req.body.icon : fail.icon;

         fail.save(function(err, newFail) {
           if (err) {
             console.log(err)
           } else {
             res.json({ message: 'Failure updated!'});
           }
         })
       }
     })
   })

 .delete(function(req, res){
   Fail.remove({ _id: req.params.fail_id }, function (err, fail){
     if(err) {
       console.log(err);
     } else {
       res.json({ title: 'failure was successfully deleted!' });
     }
   })
 });

 module.exports = router;














