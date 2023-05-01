const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/blogposts')

// GET all posts
router.get('/', postsCtrl.index);

//GET specific post
router.get('/:id', postsCtrl.show)

module.exports = router;