/* global describe, it, beforeEach, afterEach */

import { expect } from 'chai';
import { ValidationError } from '@hapi/joi';
import { optionsSchema } from '../../../lib/actions/statuses/lookup';

describe('statuses/lookup', function() {

  describe('optionsSchema', function() {

    it('should fail when missing required fields', () => {
      const validationResponse = optionsSchema.validate({});
      expect(validationResponse, JSON.stringify(validationResponse)).to.not.be.null;
      expect(validationResponse.error, JSON.stringify(validationResponse.error)).to.not.be.null;
      expect(validationResponse.error).to.be.instanceOf(ValidationError);
      expect(validationResponse.error?.message).to.contain('"id" is required');
    });

    it('should pass when all required fields', () => {
      const validationResponse = optionsSchema.validate({id:'id1'});
      expect(validationResponse, JSON.stringify(validationResponse)).to.not.be.null;
      expect(validationResponse.error, JSON.stringify(validationResponse.error)).to.be.undefined;
    });

  });

});