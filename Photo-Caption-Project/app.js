if(process.env.NODE_ENV !=='production'){
  require('dotenv').config()
}
const express = require('express')
const dbConnection = require('./config/database')
const photoRouter = require('./routes/routers.js')
const bodyParser = require('body-parser')
const flash =  require('express-flash')
const session  = require('express-session')
const passport =  require('passport')

const app = express();
const PORT = process.env.PORT || 5000;
  

try{
   dbConnection.authenticate();
  
}catch(error){
 console.log('connection problem: ',error)
}
app.use(express.static('public'))
app.use(express.json());
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: true,
    }));
app.use(flash())
app.use(session({
  secret: process.env.SECRET_KEY,
  resave:false,
  saveUninitialized:false
})) 
app.use(passport.initialize())
app.use(passport.session())
  
app.use('/api', photoRouter);

// app.get('/',(req,res)=>{
//    res.sendFile(process.cwd()+ '/views/index.html')
// })
app.listen(PORT,()=>{
    console.log(`listening to port http://localhost:${PORT}`)
})

