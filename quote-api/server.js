const express = require('express');
const app = express();


const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));


app.get('/api/quotes/random', (req, res, next) => {
    const random = getRandomElement(quotes)
    res.send({ quote: random })
});

app.get('/api/quotes', (req, res, next) => {
    const person = req.query.person
    if (!person) {
        res.send({ quotes: quotes })
    }else{
    const arr = quotes.filter(ele => ele.person === person)
    res.send({ quotes: arr })
    }
});

app.post('/api/quotes', (req, res, next) => {
     const person = req.query.person
     const quote = req.query.quote
     if(person && quote){
         quotes.push(req.query)
        res.send({quote:req.query})
     }else{
         res.status(400).send()
     }
    
});



app.listen(PORT, () => {
    console.log('Server listening to port ' + PORT)
})