import React, {useState} from 'react'
import * as fs from 'fs';
const Contact = (props) => {
  console.log("This is props")
  console.log(props)
  const [contact, setcontact] = useState(props.allContact);
  console.log(contact)
  console.log(contact)
  console.log("This is contact length")
  console.log(contact.length)
//   for (let index = 0; index < contact.length; index++) {
//     const item = contact[index];
//     console.log(item.name)
//     setcontact(item)
    
// }
console.log("This is contact data 1")

console.log(contact)
console.log("This is contact data 2")
  return (
    <div>

      {contact.map((item)=>{

      return  <h1 key={item.slug}>{item.name}</h1>
      })}
     
    </div>
  )
}
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("contactData");
  console.log("This is data")
  console.log(data)
  let myfile;
  // let allBlogs ;
  let allContact = [];
  for (let index = 0; index < data.length; index++) {
      const item = data[index];
      console.log(item)
      myfile = await fs.promises.readFile(('contactData/' + item), 'utf-8')
      console.log("This is my file")
      console.log(myfile)
    //  let  myfile1 = JSON.parse(myfile)
    allContact.push(JSON.parse(myfile))
      // allBlogs.push(JSON.stringify(myfile))
  }

  return {
      props: { allContact }, // will be passed to the page component as props
  }
}


// export async function getStaticPaths() {
//   return {
//       paths: [
//           { params: { slug: '1' } },
//           { params: { slug: '2' } },
//           { params: { slug: '3' } },
//           { params: { slug: '4' } },
//           { params: { slug: '5' } },
//       ],
//       fallback: true // false or 'blocking'
//   };
// }
// export async function getStaticProps(context) {
//   const { slug } = context.params;
//   let myBlog = await fs.promises.readFile(`contactData/${slug}.json`, 'utf-8')
//   return {
//       props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
//   }
// }



export default Contact

