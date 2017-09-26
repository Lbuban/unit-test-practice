var changemachine = require('../changemachine');
var chai = require('chai');
var expect = chai.expect;


describe('Testing Change Machine', function() { 
    
  context('Change Machine', function() { 
      it('returns(two twenties, 0 tens, 1 five, 2 ones).', function() {
        var change = changemachine(47)
        expect(change).to.eql([2, 0, 1, 2]);
        
      });
    });

});