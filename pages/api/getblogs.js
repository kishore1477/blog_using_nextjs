// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default function handler(req, res) {
    // console.log(req)
  fs.readFile(`BlogData/${req.query.slug}.json`,(err, data)=>{
    // console.log(data)
if(err){
  res.status(500).json({error: "No such blog found."})

}
    
      res.status(200).json(JSON.parse(data))
   
  // console.log(req)
//   res.status(200).json("kissssss")
})
}
