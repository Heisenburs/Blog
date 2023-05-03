import React from "react";
import { useState, useEffect } from "react";

import { getAllPosts } from "../../utilities/Blog/blog-services";
import PostItem from "../../components/PostItem";

function Homepage() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPosts();
      console.log(data);
      setPosts(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Blog</h1>(
      {posts &&
        posts.map((post) => {
          return <PostItem post={post} setPosts={setPosts} />;
        })}
      )
    </div>
  );
}
export default Homepage;
