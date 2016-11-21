var should = require( 'chai' ).should();
var basic = require( './app' );

describe('basic', function() {
  it('should return 60 when passed 1,5', function() {
    basic([1,5]).should.equal(60);
  })
  it('should return 60 when passed 5,1', function() {
    basic([5,1]).should.equal(60);
  })

  it('should return 360360 when passed 1,9', function() {
    basic([1,9]).should.equal(2520);
  })

})
