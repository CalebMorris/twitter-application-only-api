/* global describe, it, beforeEach, afterEach */
'use strict';

var expect = require('chai').expect;
const { ValidationError } = require('@hapi/joi');
var lookup = require('../../../lib/actions/statuses/lookup');

describe('statuses/lookup', function() {

  describe('optionsSchema', function() {

    const validationResponse = lookup.optionsSchema.validate({});
    expect(validationResponse, JSON.stringify(validationResponse)).to.not.be.null;
    expect(validationResponse.error, JSON.stringify(validationResponse.error)).to.not.be.null;
    expect(validationResponse.error).to.be.instanceOf(ValidationError);
    expect(validationResponse.error.message).to.contain('"id" is required')

  })

});