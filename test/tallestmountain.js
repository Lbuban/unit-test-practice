var tallestMountain = require('../tallestmountain');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Tallest Mountain', function() { //Person here is just for display

  context('given mountain heights of [1, 2, 3]', function() { //age is for display
      it('returns 3 as the tallest mountain', function() {
        var tallest = tallestMountain([1,2,3])
        expect(tallest).to.equal(3);
        
      });
    });
});