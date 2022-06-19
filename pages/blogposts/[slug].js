import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'



const Slug = () => {
  const [Blogs, setBlogs] = useState();

    const router = useRouter()
    const {slug} = router.query
    console.log(slug)
    useEffect(() => {
      if (!router.isReady) return;
      console.log("slug fetch api is working")
     fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((d)=>{
      return d.json()
      // console.log(d)
     }).then((parsed)=>{
      console.log("1")
      console.log(parsed)
      console.log("2")
      setBlogs(parsed)
     })
     
    }, [router.isReady]);

  return (

    <div  className={styles.container}>
           <main className={styles.main}>

  <h1> {Blogs && Blogs.title} </h1>

     <p>{Blogs && Blogs.content}</p>
  
 
    
    
      </main>
    </div>
  )
}

export default Slug
