const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../modules/user')
const passportAuthenticate = (passport) => {

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticate))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser( async(id, done) => {
        //console.log("At desrializer ")
       const user = await User.findByPk(id)
        //if (error) return done(null, false)
        if (!user) return done(null, false, { message: "User not found" })
        //console.log("At desrializer and User: "+ user.email)
        return done(null, user)

    })

   // console.log("Info",passport.transformAuthInfo)
}


const authenticate = async (username, password, done) => {
    //console.log("At authentication, credemttials: " + username, password)
    const user = await User.findOne({ where: { email: username } })
    if (!user) return console.log("No User")   //done(null,false,{message:"No user found with such email "+username})

    try {
       // console.log("At authentication try catch")
        if (await bcrypt.compare(password, user.password)) {
            //console.log("At authentication try catch passed data to done")
            return done(null, user)
        } else {
            //console.log("At authentication try catch Incorect Password")
            return done(null, false, { message: "Incorrect password" })

        }
    } catch (error) {
        //console.log("At authentication try catch Catching Error " + error)
        done(error)
    }

}



module.exports = passportAuthenticate