// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default function handler(req, res) {
  fs.readdir('BlogData',(req, data)=>{
    console.log(data)
   
  // console.log(req)
  res.status(200).json(data)
})
}
