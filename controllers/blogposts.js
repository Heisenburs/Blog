const Post = require('../models/blogpost')


//Crud
async function createPost(req, res) {
    req.body.author = req.user.name
    console.log(req.body);
    try {
        const blog = await Post.create(req.body)
        console.log(blog);
        res.json(blog)
    } catch (e) {
        console.log(e);
        res.status(400).json({ msg: e.message })  
    }
    }



//cRud
async function index(req, res) {
    try {
        const posts = await Post.find({})
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ msg: e.message })
    }
}

// cRud
async function show(req, res) {
try {
    const post = await Post.findById(req.params.id);
     res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ msg: e.message })
    }
}
    
//crUd
// Post.findByIdAndUpdate()
async function updatePost(req, res) {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id)
    } catch (error) {
        res.status(400).json({ msg: e.message })
    }
    }

    // cruD
    // Post.findByIdAndRemove()
async function deletePost(req, res) {
    try {
        
    } catch (error) {
        res.status(400).json({ msg: e.message })
    }
    }
    

module.exports = {
    index,
    show,
    createPost,
    updatePost,
    deletePost
}