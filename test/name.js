var name = require('../name');
var chai = require('chai');
var expect = chai.expect;


describe('Testing Nickname', function() { 
    
  context('Nickname is shorter than fullname', function() { 
      it('when the nickname has less characters than the full name', function() {
        var result = name("Kate", "Katherine")
        expect(result).to.equal(true);
        
      });
    });

    context('Nickname has letters in same order', function() { 
        it('when the letters in nickname appear in same order as fullname', function() {
          var result = name("Kate", "Katherine")
          expect(result).to.equal(true);
          
        });
      });
});