var express = require('express');
var router = express.Router();
var Category = require('../models/category');

router.route('/')//post a new blog post
    .post(function(req, res) {
        var category = new Category();
        category.name = req.body.name;
        category.icon = req.body.icon;

        category.save(function(err, category){
            if(err){
                res.status(500).send(err, "Failed on the Post Route");
            } else {
                res.json(category)
            }
        })
    })
    .get(function(req, res) {

        Category.find(function(err, category){
            if(err){
                res.status(500).send(err, "Failed on the get route");
            } else {
                res.json(category);
            }
        })
    })

router.route('/:category_id')
    .delete(function(req, res){
        Category.remove({_id: req.params.category_id}, function(err, category){
            if(err) {
                console.log(err);
            } else {
                res.json({ title: 'category was successfully deleted!'});
            }
        })
    });




module.exports = router;