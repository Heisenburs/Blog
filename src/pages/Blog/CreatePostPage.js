import React from 'react'
import CreateAPostForm from '../../components/CreateAPostForm'

function CreatePostPage({user}) {
  return (
<>

    <h1>What's On Your Mind {user.name}?</h1>

  
   <CreateAPostForm />
</>
  )
}

export default CreatePostPage;