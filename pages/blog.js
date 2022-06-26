import React, {useState} from 'react'
import * as fs from 'fs';
import Link from 'next/link';
import styles from '../styles/Blog.module.css'

import InfiniteScroll from 'react-infinite-scroll-component';
const blog = (props) => {
  console.log("This is props")
  console.log(props)
const [Blogs, setBlogs] = useState(props.allBlogs);
const [count, setcount] = useState(2);
// const [count, setcount] = useState(props.allCount);
console.log("This is Blogs")
console.log(Blogs)
console.log(Blogs.length)

const fetchData = async()=>{
 let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
 setcount(count + 2)
    let data = await d.json()
    setBlogs(data)
}
  return (
    <div className={styles.container}>
      <main>

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
            <Link href={`/blogposts/${blogitem.slug}`}>
              <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
            {/* <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 3)}...</p> */}
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
        console.log(item)
        myfile = await fs.promises.readFile(('BlogData/' + item), 'utf-8') 
        allBlogs.push(JSON.parse(myfile))
    }
  return {
    props: {allBlogs,allCount}, // will be passed to the page component as props
  }
}

export default blog
