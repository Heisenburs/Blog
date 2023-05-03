import React from 'react'
import { useState } from 'react'

import { getAllPosts } from '../../utilities/Blog/blog-services'
import PostItem from '../../components/PostItem';



function Homepage() {
  const [posts, setPosts] = useState(getAllPosts())
  console.log(posts);
  return (
    <div>
        <h1>Blog</h1>

          {/* {
            posts.map((post) => <PostItem  />
            )
          } */}
   </div>
  )
}
export default Homepage