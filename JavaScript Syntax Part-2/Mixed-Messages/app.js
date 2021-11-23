
const data = require('./data')

const messages = data
const generateMessages = () => {
    const random = Math.floor(Math.random() * messages.length)
   return console.log('Message : '+messages[random].message, 'Author : '+messages[random].author)

}

generateMessages();








