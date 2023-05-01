import { useState } from "react";

function CreateAPostForm() {
    const [blogData, setBlogData] = useState({
        image: "",
        title: "",
        body: "",
        author: "",
        category: "",
        likes: "",
    })

    //* handlesubmit
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log(blogData);
        // data sent to backend to create a new post
        const blogInfo = {
            image: blogData.image,
            title: blogData.title,
            body: blogData.body,
            category: blogData.category
        }

        const post = await post(blogInfo); // user-services?
        // useParams(post)
    } catch (error) {
        setBlogData({...blogData, error: "Could Not Post. Sorry - Try Again"})
    }
}
 

    //* handleChange
    const handleChange = (evt) => {
        setBlogData({...blogData, [evt.target.name]: evt.target.value, error: ''})
    }

    return (
        <div>
            <div>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Choose An Image</label>
                    <input type='file' id='myFile' name='filename' value={blogData.image} onChange={handleChange} required />

                    <label>Title</label>
                    <input type="input" name="title" value={blogData.title} onChange={handleChange} required/>

                    <label>Body</label>
                    <input type="textarea" name="body"  rows="7" cols="40" value={blogData.body} onChange={handleChange} required/>

                    <label>Category</label>
                    <input list="categories" name="categories"  value={blogData.category} onChange={handleChange} required/>
                    <datalist id="categories">
                        <option value="Life"></option>
                        <option value="Programming"></option>
                        <option value="Gaming"></option>
                        <option value="Travel"></option>
                        <option value="Shopping"></option>
                    </datalist>
                    
                    <button type="submit">Post</button>

                </form>
            </div>

        </div>
        
    )

}

module.exports = CreateAPostForm;