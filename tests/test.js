/* global describe, it, beforeEach, afterEach*/
'use strict';

var expect = require('chai').expect;
var assert = require('chai').assert;

var Twitter = require('../index');

describe('Constructor', function() {
  it('should throw error for missing API Key', function() {
    expect(function() {
      return new Twitter();
    }).to.throw(TypeError);
  });

  it('should throw error for missing API Secret', function() {
    expect(function() {
      return new Twitter('apiKey');
    }).to.throw(TypeError);
  });

  it('should throw error for invalid API Key', function() {
    expect(function() {
      return new Twitter(1);
    }).to.throw(TypeError);
  });

  it('should succeed with valid API key and secret', function() {
    var twit = new Twitter('apiKey', 'apiSecret');
    expect(twit).to.be.an('object');
    expect(twit.access_token).to.equal(undefined);
  });
});

describe('Unauthorized State', function() {
  var twit;
  beforeEach(function() {
    twit = new Twitter('apiKey', 'apiSecret');
  });

  afterEach(function() {
    twit = undefined;
  });

  it('should throw error', function(done) {
    twit.getTweets({})
    .then(function() {
      done(new Error('getTweets should throw an error when unauthorized'));
    })
    .catch(function(err) {
      expect(err).to.be.a('boolean');
      done();
    })
    .catch(done);
  });
});

