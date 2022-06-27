import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'



const Slug = (props) => {
  const [Blogs, setBlogs] = useState(props.allblog);



  return (

    <div className={styles.container}>
      <main className={styles.main}>

        <h1 className={styles.h1}> {Blogs && Blogs.title} </h1>

        <p>{Blogs && Blogs.content}</p>




      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // console.log(context.query)
  // const router = useRouter()
  const {slug} = context.query

  console.log("slug fetch api is working")
 
  let data = await   fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
 let allblog = await data.json()



  return {
    props: { allblog }, // will be passed to the page component as props
  }
}

    export default Slug
