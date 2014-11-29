/* global describe, it, before, beforeEach, after, afterEach*/
'use strict';

var expect     = require('chai').expect;
var proxyquire = require('proxyquire');
var request    = require('request');
var sinon      = require('sinon');

function injectTwitterStubs(requestStub) {
  return proxyquire('../index', {
    request : requestStub || {},
  });
}

describe('Constructor', function() {
  it('should throw error for missing API Key', function() {
    expect(function() {
      return new (injectTwitterStubs())();
    }).to.throw(TypeError);
  });

  it('should throw error for missing API Secret', function() {
    expect(function() {
      return new (injectTwitterStubs())('apiKey');
    }).to.throw(TypeError);
  });

  it('should throw error for invalid API Key', function() {
    expect(function() {
      return new (injectTwitterStubs())(1);
    }).to.throw(TypeError);
  });

  it('should succeed with valid API key and secret', function() {
    var twit = new (injectTwitterStubs())('apiKey', 'apiSecret');
    expect(twit).to.be.an('object');
    expect(twit.access_token).to.equal(undefined);
  });
});

describe('Unauthorized State', function() {
  var twit;
  beforeEach(function() {
    twit = new (injectTwitterStubs())('apiKey', 'apiSecret');
  });

  afterEach(function() {
    twit = undefined;
  });

  it('getTweets', function(done) {
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

describe('authenticate', function() {
  afterEach(function() {
    request.post.restore();
  });

  it('Empty Response', function(done) {
    var requestStub = sinon.stub(request, 'post', function(options, callback) {
      callback(null, { statusCode : 200 });
    });
    var twit = new (injectTwitterStubs(requestStub))('apiKey', 'apiSecret');
    twit.authenticate()
    .then(done.bind(null, 'Promise should reject'))
    .catch(function(err) {
      expect(err).to.be.instanceOf(Error);
      expect(err.message).to.contain('body');
      expect(requestStub.callCount).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('Missing response properties', function(done) {
    var requestStub = sinon.stub(request, 'post', function(options, callback) {
      callback(null, { statusCode : 200 }, '{}');
    });
    var twit = new (injectTwitterStubs(requestStub))('apiKey', 'apiSecret');
    twit.authenticate()
    .then(done.bind(null, 'Promise should reject'))
    .catch(function(err) {
      expect(err).to.be.instanceOf(Error);
      expect(err.message).to.contain('token');
      expect(requestStub.callCount).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('404', function(done) {
    var requestStub = sinon.stub(request, 'post', function(options, callback) {
      var response = { statusCode : 404 };
      callback(null, response);
    });
    var twit = new (injectTwitterStubs(requestStub))('apiKey', 'apiSecret');
    twit.authenticate()
    .then(done.bind(null, 'Promise should reject'))
    .catch(function(err) {
      expect(err).to.be.instanceOf(Error);
      expect(err.message).to.contain('bearer');
      expect(requestStub.callCount).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('500', function(done) {
    var requestStub = sinon.stub(request, 'post', function(options, callback) {
      callback(null, { statusCode : 500 });
    });
    var twit = new (injectTwitterStubs(requestStub))('apiKey', 'apiSecret');
    twit.authenticate()
    .then(done.bind(null, 'Promise should reject'))
    .catch(function(err) {
      expect(err).to.be.instanceOf(Error);
      expect(err.message).to.contain('bearer');
      expect(requestStub.callCount).to.equal(1);
      done();
    })
    .catch(done);
  });

  it('success', function(done) {
    var requestStub = sinon.stub(request, 'post', function(options, callback) {
      callback(null, { statusCode : 200 },
        '{ "token_type" : "bearer", "access_token" : "token" }');
    });
    var twit = new (injectTwitterStubs(requestStub))('apiKey', 'apiSecret');
    twit.authenticate()
    .then(done)
    .catch(done);
  });
});

