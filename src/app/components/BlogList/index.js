"use client"

import { useRouter } from 'next/navigation';
import React,{ useEffect } from 'react';

function BlogList({getAllBlogs}) {

  const router = useRouter(); 
  useEffect (() =>{
      router.refresh();
  },[])
  const handleDeletePost = async (blogId) => {
    const response = await fetch(`/api/blogs/deleteBlogs?id=${blogId}`,{
      method: "DELETE",
    });
    const data = await response.json();
    if(data?.success) router.refresh();
  }
  const handleIndividualPost = async (blogId) =>{
    router.push(`/list-blogs/${blogId}`)
  }
  return (
    <div className='px-12'>
        <div className="p-18">
        <table >
          <thead>
            <tr className="flex-col-3 gap-4 pl-12 pb-5">
              <th>Title</th>
              <th>Description</th>
              <th>Created Date</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {getAllBlogs !== undefined && getAllBlogs.length > 0 && getAllBlogs && (
              getAllBlogs.map((values => {
                return (
                  <tr key={values._id} className=" flex-col-3 gap-4 pl-12">
                    <th>{values.title}</th>
                    <th>{values.description}</th>
                    <th>{values.createdAt}</th>
                    <th><button className="border border-500 bg-red-100 color-black px-2 mx-2"
                      onClick={() => handleDeletePost(values._id) }>Delete</button>
                  </th>
                  <th><button className="border border-500 bg-red-100 color-black px-2 mx-2"
                      onClick={() => handleIndividualPost(values._id) }>View Post</button>
                  </th>
    
    
                </tr>
          )
                  })
                ))}
        </tbody>
      </table>

    </div >
    </div>
  )
}

export default BlogList
 