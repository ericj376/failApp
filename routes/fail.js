var express = require('express');
var router = express.Router();
var Fail = require('../models/fail');
var Comment = require('../models/comments');

router.route('/fail')
	.post(function(req,res) {
		var auth = req.user ? req.user._id : "570feef11b7140423ccbddcd"
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
				res.json(fails)
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
		Fail.findById(req.params.fail_id, function(err, fail) {
			if(err) {
				console.log(err)
			} else {
				 fail.title = req.body.title ? req.body.title : fail.title;
	       fail.challenge = req.body.challenge ? req.body.challenge : fail.challenge;
	       fail.img = req.body.img ? req.body.img : fail.img;
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

 router.route('/fail/:fail_id/comment')
  .get(function(req, res){
    Fail.findById(req.params.fail_id)
    .populate({
      path: 'comments',
      populate: {
        path: 'user',
        select: 'local.username',
      }
    })
    .exec(function(err, comments){
      if(err){
        res.status(500).send(err, "Something broke on getting comments");
      } else {
        res.json(comments);
      }
    })
  })
  .post(function(req, res){
    var comment = new Comment();
    comment.body = req.body.body ? req.body.body : comment.body;
    comment.user = req.user ? req.user._id : "570feef11b7140423ccbddcd";
    comment.fail = req.params.fail_id;

    console.log(comment.body);

    comment.save(function(err, com){
      if(err){
        res.send(err);
      } else {
        Fail.findById(req.params.fail_id, function(err, fail){
          if(err){
            res.send(err);
          } else {
            fail.comments.push(com._id);
            fail.save();
            res.json(com);
          }
        })
      }
    })
  });

router.route('/fail/:fail_id/comment/:comments_id')
  .delete(function(req, res ){
    Comment.remove({_id: req.params.comments_id}, function(err, comment){
      if(err){
          console.log(err);
      } else {
        res.json({message: 'comment deleted'});
      }
    })
  })
  .put(function(req, res){
    Comment.findById(req.params.comments_id, function(err, comment){
      if(err) {
        console.log(err)
      } else {
        comment.body = req.body.body ? req.body.body : comment.body;

        comment.save(function(err, newComment) {
          if (err) {
            console.log(err)
          } else {
          } res.json({ message: 'Comment updated!'});
        })
      }
    })
  })
  .get(function(req, res){
    Comment.findById(req.params.comments_id)
      .populate({ path: 'user', select: 'local.username' })
      .exec(function(err, comment){
        if(err){
          console.log(err)
        } else {
          res.json(comment)
        }
      })
  });


 module.exports = router;











