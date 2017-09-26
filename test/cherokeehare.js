var cherokeehare = require('../cherokeehare');
var chai = require('chai');
var expect = chai.expect;


describe('Testing Cherokee Hare', function() { 
    
  context('Cherokee Hare', function() { 
      it('returns 300.', function() {
        var x = cherokeehare(200)
        expect(x).to.equal(300);
        
      });
    });
});