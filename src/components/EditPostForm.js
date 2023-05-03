import React from 'react'

function EditPostForm({blogData, setBlogData}) {

    const handleChange = (evt) => {
        setBlogData({...blogData, [evt.target.name]: evt.target.value, error: ''})
    }

  return (
    <div> 
        <h1>Edit Your Post</h1>
        <form>
            Title: <input type="input" name="title" value={blogData.title} onChange={handleChange} required/>

            Body: <input type="textarea" name="body"  rows="7" cols="40" value={blogData.body} onChange={handleChange} required/>

            Life: <input type="radio" id="life" name="category" value={blogData.category} /> 
            Programming: <input type="radio" id="programming" name="category" value={blogData.category} /> 
            Gaming: <input type="radio" id="gaming" name="category" value={blogData.category} />
            Travel: <input type="radio" id="travel" name="category" value={blogData.category} /> 
            Shopping: <input type="radio" id="shopping" name="category" value={blogData.category} />
        </form>
    </div>
  )
}

export default EditPostForm;