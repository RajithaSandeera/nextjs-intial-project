"use client";

import { useRouter } from "next/navigation";
import React,{ useState} from "react";

 function addBlog(){
  const router = useRouter();

  const INITIAL_STATE = {
    title: '',
    description: ''
  }
  const [blogData, setBlogData] = useState(INITIAL_STATE);

  const handleBlogPost = async(e) =>{
        const response = await fetch('/api/blogs/addNewBlogs',
        {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(blogData),
        });
        const result = await response.json();
        console.log('results', result);
        if(result){
          setBlogData(INITIAL_STATE);
          router.push('/add-blog')
        }
        return result;
  }
  return(
  <div>
    <h1 className="font-bold text-lg p-20 flex">
      Adding new Blogs
    </h1>
    <div className="flex flex-col px-10 gap-3">
      <label>Title</label>
      <input 
      className="border border-red-500 p-3 outline-none"
      name="title"
      value={blogData['title']}
      onChange={(e) => setBlogData({
        ...blogData, 
        title : e.target.value}
      )}
       placeholder="Enter the Blog Title">
      </input>
      <label>Description</label>
      <textarea 
      className="border border-red-500 p-3 outline-none"
      rows={5} 
      name="description" 
      placeholder="Enter the Description"
      value={blogData['description']}
      onChange={(e)=>setBlogData({
        ...blogData,
        description: e.target.value
      })}
      ></textarea>
      <button onClick={handleBlogPost}
      className="border border-red-200 p-4 outline-none bg-black text-white">Add Blog</button>
    </div>
  </div>
  )
}
export default addBlog;

