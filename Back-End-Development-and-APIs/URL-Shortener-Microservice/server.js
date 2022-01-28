require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
var dns = require('dns');

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/public', express.static(`${process.cwd()}/public`));

let shortUrl=[]
app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/shorturl/:short_url', function(req, res) {
    if(shortUrl.length>0){
      let url;
      let answer = shortUrl.filter(ele=>ele.code===parseInt(req.params.short_url))
    console.log("ok",answer[0].link)
    
      url=answer[0].link;
    
     return res.redirect(url)
    
    }
});

app.post("/api/shorturl",(req,res)=>{

  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
 

  if(regexp.test(req.body.url) &&req.body.url.includes("https://") ||req.body.url.includes("http://") ){
   let code=  Math.floor(Math.random(9)*9)+3
   new_url={link:req.body.url,code:code}
   shortUrl.push(new_url)
   res.json({original_url:req.body.url , short_url:code})
  }else{
    res.json({error:'invalid url'})
  }
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
