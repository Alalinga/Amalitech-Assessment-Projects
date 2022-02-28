const { response } = require('express');
const express = require('express');
const multer = require('multer')
const photoRouter = express.Router();
const caption = require('../modules/caption')
const photos = require('../modules/photos')
const user = require('../modules/user')
const bcypt = require('bcrypt');
const passportAuthenticate = require('../authentication/authenticate');
const passport = require('passport');
const User = require('../modules/user');
const uploadFileTo = multer({ dest: process.cwd() + '/public/images' })
User.hasMany(caption)
caption.belongsTo(User)
photos.hasMany(caption)
caption.belongsTo(photos)
User.sync()
photos.sync()
caption.sync()
passportAuthenticate(passport)
photoRouter.post('/login', passport.authenticate('local',{}),(req,res)=>{
      return res.json({user:req.user,isAuthenticated: req.isAuthenticated()})
});

photoRouter.post('/create-accounts',async (req, res) => {
      const  encryptedPassword = await bcypt.hash(req.body.password,10)
      try{
      user.create({
            username: req.body.username,
            password: encryptedPassword,
            email: req.body.email
      }).then((response) => {
            res.send(response)
      }).catch((err) => {
            res.send(`error occured: ${err}`)
      })
}catch(e){
      res.send(e)
}
});

photoRouter.post("/create-caption",checkAuthentication, (req, res) => {
      //res.send("I am here")
      caption.create({
            description: req.body.description,
            userAccountId: req.body.user,
            photoId: req.body.photo,
            created_on: new Date().toDateString()
      }).then((response) => {
            res.send(response)
      }).catch((err) => {
            res.send(`error occured: ${err}`)
      })

});
photoRouter.post('/upload-Image', uploadFileTo.single('captionimage'), (req, res) => {

      if (req.file) {
            photos.create({
                  title: req.file.filename,
                  imagepath: req.file.destination,
                  created_on: new Date().toDateString()
            }).then((response) => {
                  res.json(response)
            }).catch((err) => {
                  res.json(`error occured: ${err}`)
            })
      } else {
            res.send("Nothing")
      }

});

photoRouter.get("/captions",async (req, res)=>{
     const allCaptions =await  caption.findAll({include:[{
        model: photos
     },{
       model: User
     }]})

   return  res.send(allCaptions)
})

photoRouter.get("/photos",checkAuthentication, async (req, res)=>{
      const allPhotos =await  photos.findAll({})
 
     return res.send(allPhotos)
 })


function checkAuthentication (req,res,next){
      if(req.isAuthenticated()){
            //res.send("authenticated")
         return next()
      }else{
           
          return  res.send("Not authenticated")
      }
}


module.exports = photoRouter;