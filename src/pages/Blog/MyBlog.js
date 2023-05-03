import React from 'react'

function MyBlog({user}) {
  console.log(user);
  return (
    <div>
        <h1>
          {user.name}'s Blog   
        </h1>
        </div>
  )
}

export default MyBlog