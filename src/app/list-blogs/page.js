import React from "react"
import BlogList from "../components/BlogList"


const fetchBlogPost = async () => {
  const response = await fetch('http://localhost:3001/api/blogs/fetchNewBlogs',
    {
      method: 'GET',
      cache: 'no-store'
    })
  const result = await response.json();

  if (result?.success) {
    return result.data
  }
}
export default async function page() {
  const getAllBlogs = await fetchBlogPost()
  return (
    <>
      <div className="font-bold border-l-red-50 p-20">
        All Blog List
        <BlogList getAllBlogs={getAllBlogs}/>
      </div>
    
       
      </>
     
    )
}