const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
require('dotenv').config()
const url = process.env['MONGO_URI']
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then((re)=>{
   console.log("connected");
}).catch(error=>console.log(error))
const Schema = mongoose.Schema

const UserExercises = new Schema({
  description: String,
  duration:Number,
  date: Date,
  
})
const UsersSchema = new Schema({
   username: String,
   count: Number,
   log:[UserExercises]
})

const User = mongoose.model("Users_Exercise",UsersSchema)
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});



let userInfo = []
let userExecise = []
let log = []
app.post("/api/users/",(req,res)=>{
   let name = req.body.username
   if(!name){
     return res.send("path `username` is required")
   }
  const user = User({username:name,count:1})
    user.save((error,data)=>{
      if(error)return console.log(error) 
     return res.json({username:data.username,_id:data._id})  
    })
  // userInfo.push({username:name,_id:code})  
  
})

app.post("/api/users/:_id/exercises",(req,res)=>{
    var id = req.params._id
    let dateString;
    var {_id,description,duration,date} = req.body
    var {_id,description,duration,date} = req.body
    if(!id || !parseInt(duration) || typeof description !=='string'  ){
      return res.send("Not Found")
    }
    if(!date){
      dateString = new  Date().toDateString()
    }else{
      dateString = new Date(date).toDateString();
      if(dateString==="Invalid Date"){
        return res.send(`Cast to date failed for value ${date} at path date`)
      }
    }
    //  find user with Id and update it exercise
  User.findById({_id:id},(error,data)=>{
       if(error)return console.log(error)
      if(data.length<=0){
       return res.send("Unknown UserId")
     }
data.log.push({description:description,duration:parseInt(duration),date:dateString})
data.count=data.log.length
data.save((error,results)=>{
  if(error)return console.log(error)
     console.log("Data saved")
})
return res.json({_id:id,username:data.username, date:new Date(date).toDateString(),duration: parseInt(duration),description:description})

    })
 
     
  //   userExecise.push({_id:_id,username:username[0].username, date:dateString,duration:duration,description:description})
     
  //    let userLog = log.filter(user=>user.username===username[0].username)

  //    if(userLog.length!==0){
  //      userLog[0].log.push({description:description,duration:parseInt(duration),date:dateString})
  //      userLog[0]['count']=userLog[0].log.length
  //    }else{
  //  log.push({username:username[0].username,count:1, _id:id, log:[{description:description,duration:parseInt(duration),date:dateString}]})
  //    }

  //  return res.json({_id:id,username:username[0].username, date:date,duration:duration,description:description})
});


app.get("/api/users",(req,res)=>{
    User.find({}).select({username:1,_id:1}).exec((error,data)=>{
       if(error)return console.log(error)
       return res.json(data)
      })
      
})
// ?from=2021-10-10&to=2030-10-10&limit=3
// where('log.date').gte(new Date(fromDate)).lte(new Date(to)).limit(limit).
app.get("/api/users/:id/logs",(req,res)=>{
    var fromDate =req.query.from;
    var to =req.query.to;
    var limit = req.query.limit;
    let id = req.params.id
    console.log(new Date(to))
    //if(fromDate && to && limit){
        let logResults=[]
         let answer = [];
      // User.findById(id,(error,data)=>{
      //      if(error) return console.log(error)
          
      //      if(data.length<=0) return res.send("No results Found")
       
      //     results= data.log.filter((res)=>res.date>=new Date(fromDate) && res.date<= new Date(to))
      //     results.slice(0,parseInt(limit)).forEach(ele=>{
      //     answer.push({description:ele.description,duration:ele.duration,date:new Date(ele.date).toDateString()})
      //       }) 
      //       return res.json(data)
      // });
      
      // }
  
    User.findById(id,(error,data)=>{
        if(error) return console.log("Error,occured",error)
        if(data.length<=0) return res.send("No results Found")
       let queryLimit = parseInt(limit) || data.log.length
      console.log("Length",data.log.length)
      
       console.log(new Date(fromDate)!="Invalid Date",new Date(to) !="Invalid Date")
      //  Either to or from date is set
      if(new Date(fromDate)!="Invalid Date" || new Date(to) !="Invalid Date"){

        console.log("I am In")
          // if both dates are set
          console.log(new Date(fromDate),new Date(to))
      if(new Date(fromDate)!="Invalid Date" && new Date(to)!="Invalid Date"){
            console.log("In Both")
           console.log(new Date(fromDate)!="Invalid Date",new Date(to)!="Invalid Date")
      console.log(new Date(fromDate),new Date(to))
          
        logResults= data.log.filter((res)=>res.date>=new Date(fromDate) && res.date<= new Date(to))
          logResults.slice(0,queryLimit).forEach(ele=>{
          answer.push({description:ele.description,duration:ele.duration,date:new Date(ele.date).toDateString()})
            }) 
      return res.json({username:data.username,_id:id,from: new Date(fromDate).toDateString(),to: new Date(to).toDateString(),count:answer.length,log:answer})
      }
      else if(new Date(fromDate)!="Invalid Date" && new Date(to)=="Invalid Date"){
        console.log("In from")
        logResults= data.log.filter((res)=>res.date>=new Date(fromDate))
          logResults.slice(0,queryLimit).forEach(ele=>{
          answer.push({description:ele.description,duration:ele.duration,date:new Date(ele.date).toDateString()})
            }) 
      return res.json({username:data.username,_id:id,from: new Date(fromDate).toDateString(),count:answer.length,log:answer})
      }

      else if(new Date(fromDate)=="Invalid Date" && new Date(to)!="Invalid Date"){
        console.log("In to")
        logResults= data.log.filter((res)=>res.date<= new Date(to))
          logResults.slice(0,queryLimit).forEach(ele=>{
          answer.push({description:ele.description,duration:ele.duration,date:new Date(ele.date).toDateString()})
            }) 
      return res.json({username:data.username,_id:id,to: new Date(to).toDateString(),count:answer.length,log:answer})
      }


      }



    data.log.forEach(ele=>{
          answer.push({description:ele.description,duration:ele.duration,date:new Date(ele.date).toDateString()})
            })
    answer = answer.slice(0,queryLimit)   

return res.json({username:data.username,_id:id,count:answer.length,log:answer})
        // return res.json(data)
       
    })
})
// app.get("api/users/:id/logs?",(req,res)=>{
//   console.log("Queries",req.query)
// })



const generateCode=(length)=>{
const characters ='abcdefghiABCDEFGHIJKLMNjklmnopqrstuvwxyz0123456789OPQRSTUVWXYZ';
let code = ''
   for(let i=0;i<length;i++){
    code += characters.charAt(Math.random()*length)
   }
  return code
}
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
