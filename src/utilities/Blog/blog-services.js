// where frontend functions are kept

import * as blogsApi from './blog-api'

//* Post
export async function createPost(blogInfo) {
    const post = await blogsApi.createPost(blogInfo);
    // localStorage.setItem('post', post)
    // send to MongoDB
   console.log(post);
    return post;
}

export async function getAllPosts() {
    const posts = await blogsApi.getAllPosts();
    console.log(posts);
    return posts;
}