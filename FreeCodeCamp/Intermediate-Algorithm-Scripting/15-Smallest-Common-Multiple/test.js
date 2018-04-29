var should = require( 'chai' ).should();
var basic = require( './pureMaths' );

describe('basic', function() {
  it('should return 60 when passed 1,5', function() {
    basic([1,5]).should.equal(60);
  })
  it('should return 60 when passed 5,1', function() {
    basic([5,1]).should.equal(60);
  })
  it('should return 60 when passed 1,6', function() {
    basic([1,6]).should.equal(60);
  })
  it('should return 60 when passed 1,7', function() {
    basic([1,7]).should.equal(420);
  })
  it('should return 840 when passed 1,8', function() {
    basic([1,8]).should.equal(840);
  })
  it('should return 360360 when passed 1,13', function() {
    basic([1,13]).should.equal(360360);
  })

  it('should return 2520 when passed 1,9', function() {
    basic([1,9]).should.equal(2520);
  })

  it('should return 6056820 when passed 23,18', function() {
    basic([23,18]).should.equal(6056820);
  })

})
