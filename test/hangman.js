var hangman = require('../hangman');
var chai = require('chai');
var expect = chai.expect;


describe('Testing Hangman', function() { 
    
  context('Hangman', function() { 
      it('returns true if letter A is in word', function() {
        var word = hangman("a", "seattle")
        expect(word).to.equal(1);
        
      });
    });

});