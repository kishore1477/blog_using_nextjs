import React, {useState} from 'react'
import * as fs from 'fs';
import Link from 'next/link';
import styles from '../styles/Blog.module.css'

import InfiniteScroll from 'react-infinite-scroll-component';
const Blog = (props) => {
 
const [Blogs, setBlogs] = useState(props.allBlogs);
const [count, setcount] = useState(2);
// const [count, setcount] = useState(props.allCount);

const fetchData = async()=>{
 let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
 setcount(count + 2)
    let data = await d.json()
    setBlogs(data)
}
  return (
    <div className={styles.container}>
      <main>
<h1 className={styles.h1}>Blog of Hunting Coder</h1>
      <InfiniteScroll
        dataLength={Blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.allCount !== Blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {Blogs.map((blogitem) => {
          return <div key={blogitem.slug}>
            {/* <Link href={`/blogposts/${blogitem.slug}`}> */}
              <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
              {/* </Link> */}
            <p className={styles.blogItemp}>{blogitem.metadesc.substr(0,43)}...</p>
            <Link href={`/blogposts/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
          </div>
        })}
        {/* This Blogs {Blogs.map((item)=>{
       return <h1 key={item.slug}>{item.title}</h1>
           })} */}
        
             </InfiniteScroll>












      
      </main>
      </div>
    
  )
}
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("BlogData");
  
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
    for (let index = 0; index < 2; index++) {
      const item = data[index];
        myfile = await fs.promises.readFile(('BlogData/' + item), 'utf-8') 
        allBlogs.push(JSON.parse(myfile))
    }
  return {
    props: {allBlogs,allCount}, // will be passed to the page component as props
  }
}

export default Blog
