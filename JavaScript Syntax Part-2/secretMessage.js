let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//1. removing the last string of the array secretMessage
secretMessage.pop()

//logging the length of the array
console.log(secretMessage)

// adding 'to' and 'Program' to the array
secretMessage.splice(23,0,'to','Program')

// changing the word 'easily' to 'right'
const easilyIndex=secretMessage.indexOf('easily')
secretMessage[easilyIndex]='right'

//removing the first string(element) of the array
secretMessage.shift()

// adding 'Programming' to begining of the array
secretMessage.unshift('Programming')

// removing 'get', 'right', 'the', 'first', 'time', and replacing with 'know'
const indexOfGet=secretMessage.indexOf('get')
secretMessage.splice(indexOfGet,5,'know')

//printing the secret Message
console.log(secretMessage.join(' '))
