var palindrome = require('../palindrome');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Palindrome', function() { 
  context('palindrome', function() { 
      it('returns true as racecar is a palindrome', function() {
        var word = palindrome("racecar")
        expect(word).to.equal(true);
        
      });
    });

    context('palindrome', function() { 
        it('returns false as lyndsay is not a palindrome', function() {
          var word = palindrome("lyndsay")
          expect(word).to.equal(false);
          
        });
      });
});