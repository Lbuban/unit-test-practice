var greaterThan = require('../greaterThan');
var chai = require('chai');
var expect = chai.expect;


describe('Testing Greater Than', function() { 
    
  context('Greater Than', function() { 
      it('returns true because 6 is greater than 4', function() {
        var result = greaterThan(4, 6)
        expect(result).to.equal(true);
        
      });
    });

});