"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

function HomePage() {
  const router = useRouter();

  return (
    <div style={{ display:'flex', flexDirection:'column' }}>
      <button onClick={() => router.push('/list-blogs')}>Show Blog Details</button>
      <button onClick={() => router.push('/add-blog')}>Add new Blogs</button>
    </div>
  )
}

export default HomePage
