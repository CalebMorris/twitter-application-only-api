/* global describe, it*/

var expect = require('chai').expect;

describe('test', function() {
  it('should pass', function() {
    expect(1).to.equal(1);
  });

  it('should fail', function() {
    expect(2).to.equal(1);
  });
});
