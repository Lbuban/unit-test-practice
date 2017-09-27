var secondLargest = require('../secondLargest');
var chai = require('chai');
var expect = chai.expect;


describe('Testing Second Largest', function() { 
    
  context('Second Largest', function() { 
      it('returns second largest number in the array', function() {
        var result = secondLargest([8, 2, 6, 4])
        expect(result).to.equal(6);
        
      });
    });
});