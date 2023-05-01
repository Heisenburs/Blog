import React from 'react'

function CreateAPost() {
  return (
<>

    <h1>Write Your Own Blog Post!</h1>

    <div>
        <form action='/posts/new' method='POST'> 
            <input type='file' id='myFile' name='filename' />
            <input type="input" name="heading" value="heading"/>
            <input type="textarea" name="body" value="body" />

            <input type="submit" />
        </form>
    </div>
</>
  )
}

module.exports = CreateAPost