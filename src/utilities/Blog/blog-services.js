// where frontend functions are kept

import * as blogsApi from './blog-api'

//* Post
export async function createPost(blogInfo) {
    const post = await usersApi.createPost(blogInfo);
    // localStorage.setItem('post', post)
    // send to MongoDB
    return post;
}