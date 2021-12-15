const assert = require('assert')
const Rooster = require('../index.js')


describe('Rooster', () =>{

   describe('.announceDawn', () =>{
     it('returns a rooster call',() =>{
       const expected ='moo!';
       const result = Rooster.announceDawn()
         assert.strictEqual(result,expected)
     })
   });
   
describe('.timeDawn', () =>{
  it('returns its time argument as a string', () =>{
    const results = Rooster.timeAtDawn(6)
    assert.strictEqual(Number(results),6)
  });
  
 it('throws an error if passed a number less than 0', () =>{
   const hour = -1
   assert.throws( ()=>{
           Rooster.timeAtDawn(hour)
   }, 'Number is less than -1')
 });

it('throws an error if passed a number greater than 23', () =>{
   const hour = 24
   assert.throws( ()=>{
           Rooster.timeAtDawn(hour);
   }, 'Number is greatre than 23')
 });


})

})



