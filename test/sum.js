var sum = require('../sum');
var chai = require('chai');
var expect = chai.expect;


describe('Testing Sum', function() { 
    
  context('Sum', function() { 
      it('returns 5', function() {
        var result = sum(2, 3)
        expect(result).to.equal(5);
        
      });
    });

});