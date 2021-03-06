/* global describe, it, beforeEach, afterEach */

import { expect } from 'chai';
import sinon from 'sinon';

import request from 'request';
import util from '../../../lib/util';
var testFunc = util.requestHandler;

var noop = function() {};
var pass = function() { expect(true).to.be.true; };
var fail = function(l) { expect(false).to.be.true; };

describe('requestHandler', function() {

  describe('setup', function() {

    it('should throw when no arguments', function() {
      expect(testFunc).to.throw(Error);
    });

    it('should throw when @param1 wrong type', function() {
      expect(testFunc.bind(null, -1)).to.throw(Error);
    });

    it('should throw when @param2 wrong type', function() {
      expect(testFunc.bind(null, noop, -1)).to.throw(Error);
    });

    it('should throw when @param3 wrong type', function() {
      expect(testFunc.bind(null, noop, noop, -1)).to.throw(Error);
    });

    it('should throw when @param4 wrong type', function() {
      expect(testFunc.bind(null, noop, noop, '', -1)).to.throw(Error);
    });

  });

  describe('response', function() {

    var getStub;

    beforeEach(function() {
      getStub = sinon.stub(request, 'get');
    });

    afterEach(function() {
      request.get.restore();
    });

    it('request fails', function() {
      testFunc(pass, fail, '', '', {});
    });

    it('request succeeds', function() {
      var r = { statusCode : 200 };
      var b = '{ "foo":"this is body" }';
      getStub.callsArgWith(1, null, r, b );

      testFunc(pass, fail, '', '', {});
    });

  });

});

/*
function requestHandler(resolve, reject, path, token, options) {
  options = options || {};
  var requestOptions = {
    url     : 'https://api.twitter.com/1.1/' + path + '.json?' +
              querystring.stringify(options),
    method  : 'GET',
    headers : {
      'Authorization'  : 'Bearer ' + token,
      'User-Agent'     : 'request'
    },
  };

  request.get(requestOptions, requestCallback.bind(null, resolve, reject));
}
*/
