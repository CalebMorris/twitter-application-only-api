/* global describe, it */

import Joi from '@hapi/joi';
import { expect, AssertionError } from 'chai';
import { validateOptions as testFunc } from '../../../lib/util';

describe('validateOptions', function() {

  describe('setup', function() {

    it('should throw with no arguments', function() {
      expect(testFunc).to.throw(Error);
    });

    it('should throw with @param1 wrong type', function() {
      expect(testFunc.bind(null, -1)).to.throw(Error);
    });

    it('should throw with @param2 wrong type', function() {
      expect(testFunc.bind(null, 'token', -1)).to.throw(Error);
    });

    it('should throw with @param3 wrong type', function() {
      expect(testFunc.bind(null, 'token', {}, -1)).to.throw(Error);
    });

  });

  describe('response', function() {

    it('should reject with fails validation', function(done) {
      testFunc('', Joi.object().keys({ t : Joi.string().required() }), {})
      .then(done.bind(null, new AssertionError('Promise should have rejected')))
      .catch(function(err) {
        expect(err).to.be.an.instanceof(Error);
        expect(err.name).to.equal('ValidationError');
        done();
      })
      .catch(done);
    });

    it('should resolve if passes validation', function(done) {
      testFunc('', Joi.object(), {})
      .then(function(result) {
        expect(result).to.equal(undefined);
        done();
      })
      .catch(done);
    });

  });

});

/*
function validateOptions(token, schema, options) {
  return new Promise(function(resolve, reject) {
    if (typeof token === 'undefined') {
      return reject(false);
    }
    if (options == null || typeof options !== 'object') {
      return reject(new TypeError('\'options\' must be an object.'));
    }

    Joi.validate(options, schema, function(err, value) {
      if (err) {
        return reject(err);
      }

      resolve();
    });
  });
}
*/
