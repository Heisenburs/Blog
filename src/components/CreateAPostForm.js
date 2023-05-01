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

    //TODO: handlesubmit
    //prevent default
    //try/catch defining blogInfo
    //decalre blog, await info
    // catch error

    //TODO: handleChange
    // takes event 
    // setBlogData, spread blogData

    return (
        <div>
            <div>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Choose An Image</label>
                    <input type='file' id='myFile' name='filename' />

                    <label>Title</label>
                    <input type="input" name="title" value="title"/>

                    <label>Body</label>
                    <input type="textarea" name="body" value="body" rows="7" cols="40"/>

                    <label>Category</label>
                    <input list="categories" name="categories" />
                    <datalist id="categories">
                        <option value="Life"></option>
                        <option value="Programming"></option>
                        <option value="Gaming"></option>
                        <option value="Travel"></option>
                        <option value="Shopping"></option>
                    </datalist>
                    
                    <button type="submit" disabled={disable} >Post</button>

                </form>
            </div>
        </div>
        
    )

}