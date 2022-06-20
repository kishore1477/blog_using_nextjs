import React from 'react'
import { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'

import Link from  'next/link'
// import { useEffect } from 'react'



const Blog = (props) => {
  console.log("This is props")
  console.log(props)

  const [Blogs, setBlogs] = useState(props.allblogs);
  useEffect(() => {
    console.log("Blog fetch api is working")
   
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
};
export async function getServerSideProps(context) {
 let data = await  fetch('http://localhost:3000/api/blogs')
 let allblogs = await data.json()

   

  return {
    props: {allblogs}, // will be passed to the page component as props
    // props: {kishore: "Good Boy"}, // will be passed to the page component as props
  }
}
export default Blog
