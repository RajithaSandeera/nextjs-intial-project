"use client"

import React from 'react'

export default function IndividualDetailComponent({blogData}) {
  if(!blogData){
    return <div>Loading....</div>
  }
  return (
    <div className='p-20 border border-black-500'>
      Full Details Component
      <div style={{ padding: '1rem', display:'flex', flexDirection:'column'}}>
      <div className='p-1 border border-black-500'>{blogData.title}</div>
      <div className='p-1 border border-black-500'>{blogData.description}</div>
      <div className='p-1 border border-black-500'>{blogData.createdAt}</div>
      </div>
      </div>
  )
}

