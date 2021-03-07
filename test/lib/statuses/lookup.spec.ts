/* global describe, it, beforeEach, afterEach */

import { expect } from 'chai';
import { ValidationError } from '@hapi/joi';
import { optionsSchema } from '../../../lib/actions/statuses/lookup';
import { Twitter } from '../../../lib/twitterAppApi';
import { setupIntegrationHooks } from '../../integration-hooks';

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

  describe('integration', function() {

    const twit = setupIntegrationHooks();

    it ('single tweet lookup', async function() {
      const id = '1367513918235693065';
      const results = await twit.statuses.lookup({id})
      expect(results).to.not.be.null;
      expect(results.length).to.eq(1);
      expect(results[0].id).to.eq(id);
    });

    it ('multiple tweet lookup', async function() {
      const id1 = '1367513918235693065';
      const id2 = '1362807242932813825';
      const ids = `${id1},${id2}`;
      const results = await twit.statuses.lookup({id: ids})
      expect(results).to.not.be.null;
      expect(results.length).to.eq(2);
      expect(results[0].id).to.eq(id1);
      expect(results[1].id).to.eq(id2);
    });

  });

});