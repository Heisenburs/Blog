import { useState } from "react";
import { createPost } from "../utilities/Blog/blog-services";


//bring down user as author

function CreateAPostForm() {
    const [blogData, setBlogData] = useState({
        image: "",
        title: "",
        body: "",
        author: "",
        category: "Life",
        likes: "",
    })

    //* handlesubmit
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log(blogData);
        // data sent to backend to create a new post
        const blogInfo = {
            title: blogData.title,
            body: blogData.body,
            category: blogData.category
        }

        const post = await createPost(blogInfo); // user-services?
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
                <form autoComplete="off" onSubmit={handleSubmit} method="POST" action="/">
                    {/* <label>Choose An Image</label>
                    <input type='file' id='myFile' name='filename' value={blogData.image} onChange={handleChange} /> */}

                    <label>Title</label>
                    <input type="input" name="title" value={blogData.title} onChange={handleChange} required/>

                    <label>Body</label>
                    <input type="textarea" name="body"  rows="7" cols="40" value={blogData.body} onChange={handleChange} required/>

                    <label>Category</label><br/>
                    <label for="life">Life</label>
                    <input type="radio" id="life" name="category" value={blogData.category} />                 
                    <label for="programming">Programming</label>
                    <input type="radio" id="programming" name="category" value={blogData.category} />                   
                    <label for="gaming">Gaming</label>
                    <input type="radio" id="gaming" name="category" value={blogData.category} />                
                    <label for="travel">Travel</label>
                    <input type="radio" id="travel" name="category" value={blogData.category} />                 
                    <label for="shopping">Shopping</label>
                    <input type="radio" id="shopping" name="category" value={blogData.category} />                
                    
                    <button type="submit">Post</button>

                </form>
            </div>

        </div>
        
    )

}

export default CreateAPostForm;