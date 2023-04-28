import React from 'react'

function CreateAPost() {
  return (
<>

    <h1>Write Your Own Blog Post!</h1>

    <div>
        <form action='/action_page.php'> 
            <input type='file' id='myFile' name='filename' />
            <input type="input" name="heading" value="heading"/>
            <input type="textarea" name="body" value="body" />

            <input type="submit" />
        </form>
    </div>
</>
  )
}

export default CreateAPost