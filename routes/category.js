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

module.exports = router;