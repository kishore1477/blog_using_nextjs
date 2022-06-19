import React from 'react'
import { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'

import Link from  'next/link'
// import { useEffect } from 'react'



const Blog = () => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("Blog fetch api is working")
   fetch('http://localhost:3000/api/blogs').then((d)=>{
    return d.json()
    // console.log(d)
   }).then((parsed)=>{
    console.log(parsed)
    setBlogs(parsed)
   })
   
  }, []);
 
  return (
    <div className={styles.container}>
<main className={styles.main}>
 { Blogs.map((item)=>{
  // console.log(item.title)
  // console.log(item.content)
  
  return <div key={item.slug}>
 <Link href={`/blogposts/${item.slug}`}>
 <h3 className={styles.blogitemh3}>{item.title}in  2022?</h3>
 </Link>
 <p>{item.content.substr(0,40)}...</p>
  </div>
  
 })}
    

 
     
 
    <p>JavaScripts is a language for design  logic for web.</p>
    </main>
    </div>

  )
}

export default Blog
