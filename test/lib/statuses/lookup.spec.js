/* global describe, it, beforeEach, afterEach */
'use strict';

var expect = require('chai').expect;
const { ValidationError } = require('@hapi/joi');
var lookup = require('../../../lib/actions/statuses/lookup');

describe('statuses/lookup', function() {

  describe('optionsSchema', function() {

    it('should fail when missing required fields', () => {
      const validationResponse = lookup.optionsSchema.validate({});
      expect(validationResponse, JSON.stringify(validationResponse)).to.not.be.null;
      expect(validationResponse.error, JSON.stringify(validationResponse.error)).to.not.be.null;
      expect(validationResponse.error).to.be.instanceOf(ValidationError);
      expect(validationResponse.error.message).to.contain('"id" is required');
    })

    it('should pass when all required fields', () => {
      const validationResponse = lookup.optionsSchema.validate({id:['id1']});
      expect(validationResponse, JSON.stringify(validationResponse)).to.not.be.null;
      expect(validationResponse.error, JSON.stringify(validationResponse.error)).to.be.undefined;
    })

  })

});