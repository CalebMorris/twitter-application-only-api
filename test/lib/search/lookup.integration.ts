/* global describe, it, beforeEach, afterEach */

import { expect } from 'chai';
import { FullUser } from 'twitter-d';
import { Twitter } from '../../../lib/twitter-app-api';
import { setupIntegrationHooks } from '../../integration-hooks';

describe('search/tweets', function() {

  describe('integration', function() {

    setupIntegrationHooks();

    it ('single tweet lookup', async function() {
      const testQuery = '#test';
      const twit: Twitter = this.twit;
      const results = await twit.search.tweets({ q: testQuery });
      expect(results).to.not.be.null;
      expect(results.statuses).to.not.be.null;
      expect(results.statuses.length).to.greaterThan(0);
      expect(results.statuses[0].id_str).to.not.be.empty
      expect(results.statuses[0].user).to.not.be.empty
      const user = results.statuses[0].user as FullUser;
      expect(user.name).to.not.be.empty
      expect(user.screen_name).to.not.be.empty
      expect(user.profile_image_url_https).to.not.be.empty
      expect(results.statuses[0].full_text).to.not.be.empty
      expect(results.statuses[0].created_at).to.not.be.empty
    });

  });

});