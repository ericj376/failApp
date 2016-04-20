var express = require('express');
var router = express.Router();
var Ratings = require('../models/ratings');
var Fail = require('../models/fail');

router.route('/:fail_id')//post a new blog post
    .post(function(req, res) {
        var ratings = new Ratings();
        ratings.user = req.user ? req.user._id : "57168c3db0f09e770b1ba5b2";
        ratings.fail = req.params.fail_id;
        ratings.ratingScale = req.body.ratingScale;
        
        ratings.save(function(err, rating){
            if(err){
                res.status(500).send(err, "Ratings Failed on the Post Route");
            } else {
                Fail.findById(req.params.fail_id, function(err, fail){
                    if(err){
                       res.status(500).send(err, "Ratings Failed to find by ID on the Post Route"); 
                    } else {
                        fail.ratings.push(rating._id);
                        fail.save();
                        res.json(rating);
                    }
                })
            }
        })
    })
    .get(function(req, res) {

        Ratings.find(function(err, ratings){
            if(err){
                res.status(500).send(err, "Ratings Failed on the get route");
            } else {
                res.json(ratings);
            }
        })
    })

module.exports = router;