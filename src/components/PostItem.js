import React from 'react'


// map over posts array
function PostItem({post}) {
    console.log(post);
  return (
    <div>
<p>{post.author}</p>
<p>{post.title}</p>
<p>{post.body}</p>
<p>{post.category}</p>
    </div>
  )
}

export default PostItem