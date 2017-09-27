var containsVowel = require('../containsVowel');
var chai = require('chai');
var expect = chai.expect;


describe('Testing if word contains a vowel', function() { 
    
  context('Contains Vowel', function() { 
      it('returns true because word contains vowel', function() {
        var result = containsVowel("noise")
        expect(result).to.equal(true);
        
      });
    });

});