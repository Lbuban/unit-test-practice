var average = require('../average');
var chai = require('chai');
var expect = chai.expect;


describe('Testing Average', function() { 
    
  context('Average', function() { 
      it('returns 2', function() {
        var result = average(1, 2, 3)
        expect(result).to.equal(2);
        
      });
    });
});