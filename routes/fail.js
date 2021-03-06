var express = require('express');
var router = express.Router();
var Fail = require('../models/fail');
var Comment = require('../models/comments');
var User = require('../models/user');


router.route('/categories/:cat_id')
  .get(function(req, res) {
    Fail.find({category: req.params.cat_id})
      .populate('category')
      .populate({
        path: 'ratings',
        select: 'user',
      })
      .exec(function(err, fails) {
        if (err) {
          res.status(500).send(err, "failed on category route");
          return;
        }
        var incompleteFails = fails.filter(function(fail) {
          var userFound = false;
          for(var i = 0; i < fail.ratings.length; i++) {
            userFound = userFound || fail.ratings[i].user.toString() === req.user._id.toString();
          }
          return !userFound;
        })
        var count = incompleteFails.length;
        if(count === 0){
          res.json(null);
        } else {
          var random = Math.floor(Math.random() * count);
          var results = incompleteFails[random];
          res.json(results);
        }
      }) 
});

router.route('/')
	.post(function(req,res) {
		var auth = req.user ? req.user._id : "570feef11b7140423ccbddcd"
		var fail = new Fail ({
			
			title: req.body.title,
			challenge: req.body.challenge,
			img: req.body.img,
			icon: req.body.icon,
      category: req.body.category,
		});
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
		.populate('comments')
    .populate('category')
    .populate({
        path: 'ratings',
        select: 'ratingScale',
    })
		.exec(function(err, fails) {
			if(err) {
			} else {
				res.json(fails)
			}
		})
	});

router.route('/:fail_id')
	.get(function(req, res) {
		Fail.findById(req.params.fail_id)
			.populate('category')
      .populate({
				path: 'comments',
				populate: {
					path: 'user',
					select: 'local.username'
				}
			})
      .populate({
        path: 'ratings',
        select: 'ratingScale',
      })
			.exec(function(err, fail) {
				if (err) {
				}else {
					res.json(fail)
				}
			})
	})

	.put(function(req, res) {
		Fail.findById(req.params.fail_id, function(err, fail) {
			if(err) {
			} else {
				 fail.title = req.body.title ? req.body.title : fail.title;
	       fail.challenge = req.body.challenge ? req.body.challenge : fail.challenge;
	       fail.img = req.body.img ? req.body.img : fail.img;
	       fail.rating = req.body.rating ? req.body.rating : fail.rating;
	       fail.category = req.body.category ? req.body.category : fail.category;
	       fail.icon = req.body.icon ? req.body.icon : fail.icon;

         fail.save(function(err, newFail) {
           if (err) {
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
     } else {
       res.json({ title: 'failure was successfully deleted!' });
     }
   })
 });

 router.route('/:fail_id/comment')
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

router.route('/:fail_id/comment/:comments_id')
  .delete(function(req, res ){
    Comment.remove({_id: req.params.comments_id}, function(err, comment){
      if(err){
      } else {
        res.json({message: 'comment deleted'});
      }
    })
  })
  .put(function(req, res){
    Comment.findById(req.params.comments_id, function(err, comment){
      if(err) {
      } else {
        comment.body = req.body.body ? req.body.body : comment.body;

        comment.save(function(err, newComment) {
          if (err) {
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
        } else {
          res.json(comment)
        }
      })
  });

router.route('/user/completed/:fail_id')
  .post(function(req, res) {

    var u = req.user ? req.user._id : "5717a34ba814d69d02b1149c";

    Fail.findById(req.params.fail_id, function( err, fail ) {
      if(err) {
        res.status(500).send( err, "Something broke on posting completed fail");
      } else {
        User.findById( u, function(err, user) {
         if(err) {
        res.status(500).send( err, "Something broke on posting the user of the completed fail" );
      } else {
        user.local.completed.push( fail._id )
        user.save()
        res.json(user)
      } 
        })
      }
      }
    )
  });

router.route('/user/completed')  
  .get(function(req, res){
    var u = req.user ? req.user._id : "5717a34ba814d69d02b1149c";

    User.findById(u) 
      .populate( 'local.completed' )
      .populate( 'local.category')
      .exec(function( err, user ){
        var options = {
          path: 'ratings',
          model: 'Ratings'
        };
        User.populate(user.local.completed, options, function(err, ratings) {
          if(err){
            res.status(500).send( err, "Something broke on getting users completed challenges" );
          } else {
            res.json( user );
          }
        })
      })
  });


 module.exports = router;











