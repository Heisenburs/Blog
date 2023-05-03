import React from "react";
import LikeButton from "./LikeButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { Card } from "react-bootstrap";

// map over posts array
function PostItem({ post, setPosts }) {
  console.log(post);
  return (
<div>
    <Card className="text-center">
    <Card.Header>{post.author}</Card.Header>
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text><h3>{post.body}</h3>
        
      </Card.Text>
      <p> Likes: <span>{post.likes}</span>&nbsp; | &nbsp;<span>Category: {post.category}</span> </p>
      <span> <LikeButton /> <EditButton />
      <DeleteButton /></span>
     
    </Card.Body>
    <Card.Footer className="text-muted">{post.createdAt}</Card.Footer>
  </Card>
</div>
   
  );
}

export default PostItem;
