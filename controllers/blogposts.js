const Post = require('../models/blogpost')


//Crud
async function createPost(req, res) {
    try {
        const blog = await Post.createPost(req.body)
        console.log(blog);
    } catch (error) {
        res.status(400).json({ msg: e.message })  
    }
    }



//cRud
async function index(req, res) {
    try {
        const posts = await Post.find({}).sort('author').exec();
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