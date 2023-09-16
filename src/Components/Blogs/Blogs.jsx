import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    console.log(blogs)

    return (
        <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl">Blogs: {blogs.length}</h2>
            {
                
            }
        </div>
    );
};

export default Blogs;