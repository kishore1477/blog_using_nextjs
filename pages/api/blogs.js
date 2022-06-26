// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import * as fs from 'fs';
// export default function handler(req, res) {
//   fs.readdir('BlogData',(req, data)=>{
//     console.log(data)
   
//   // console.log(req)
//   res.status(200).json(data)
// })
// }
// import * as fs from 'fs';
// export default async function handler(req, res) {
//   let data = await fs.promises.readdir('BlogData')
//   let allblogs;
//   let myfile = []
//   for (let index = 0; index < data.length; index++) {

//     const item = data[index];
//     // console.log(item)
//     allblogs =  await fs.promises.readFile(('BlogData/'+ item), 'utf-8')
//     // console.log(allblogs)
//     myfile.push(JSON.parse(allblogs))   // contvert string to object


    
//   }
//   // res.status(200).json(allblogs)
//   res.status(200).json(myfile)

// //   fs.readdir('BlogData',(req, data)=>{
// //     let allBlogs = []
// //     data.forEach((item)=>{
// //       // console.log(item)
// //       fs.readFile(('BlogData/'+item), (da)=>{
// //         allBlogs.push(da)
// // // console.log(da)
// //       })
// //     })
//     // console.log(data)
   
//   // console.log(req)
  
// // })
// }

import * as fs from 'fs';

export default async function handler(req, res) {

    console.log(req.query.count)
    let data = await fs.promises.readdir("BlogData");
    data = data.slice(0, parseInt(req.query.count)) 
    let myfile; 
    let allBlogs = [];
      for (let index = 0; index < data.length; index++) {
       
        const item = data[index]; 
          myfile = await fs.promises.readFile(('BlogData/' + item), 'utf-8') 
          allBlogs.push(JSON.parse(myfile))
      }
      res.status(200).json(allBlogs)
    }
