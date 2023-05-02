// where the routes are kept

//* Post
export function createPost(blogInfo) {
    return sendRequest('/posts/new', 'POST', blogInfo)
  }