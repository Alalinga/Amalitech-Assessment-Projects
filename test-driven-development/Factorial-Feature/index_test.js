var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {

    it('It will test if the output of 5! is equal to 120', () =>{
      const expectedResult = 120;
      const result = Calculate.factorial(5)
     assert.equal(result,expectedResult)

    });

    it('It will test if the output of 3! is equal to 6', () =>{
      const expectedResult = 6;
      const result = Calculate.factorial(3)
     assert.equal(result,expectedResult)

    });
    it('return 1 when input is 0', () =>{
      
      const expectedResult = 1;
      const result = Calculate.factorial(0)
     assert.equal(result,expectedResult)
    });

  });
});
