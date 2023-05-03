import React from 'react'
import LikeButton from './LikeButton';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';


// map over posts array
function PostItem({post, setPosts}) {
    console.log(post);
  return (
    <div>
<p>{post.author}</p>
<p>{post.title}</p>
<p>{post.body}</p>
<p>{post.category}</p>
<p>{post.likes}</p>
<p>{post.createdAt}</p>
<br/>

<LikeButton />
<EditButton />
<DeleteButton />
    </div>

  )
}

export default PostItem