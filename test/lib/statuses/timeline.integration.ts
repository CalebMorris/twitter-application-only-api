/* global describe, it, beforeEach, afterEach */

import { expect } from 'chai';
import { FullUser } from 'twitter-d';
import { Twitter } from '../../../lib/twitter-app-api';
import { setupIntegrationHooks } from '../../integration-hooks';

describe('statuses/timeline', function() {

  describe('integration', function() {

    setupIntegrationHooks();

    it ('single tweet lookup', async function() {
      const twit: Twitter = this.twit;
      const results = await twit.statuses.timeline({screen_name: 'twitter'})
      expect(results).to.not.be.null;
      expect(results.length).to.be.greaterThan(0);
      const sampleTweet = results[0];
      const user = sampleTweet.user as FullUser;
      expect(user).to.not.be.empty
      expect(user.name).to.not.be.empty
      expect(user.screen_name).to.not.be.empty
      expect(user.profile_image_url_https).to.not.be.empty
      expect(sampleTweet.id_str).to.not.be.empty
      expect(sampleTweet.full_text).to.not.be.empty
      expect(sampleTweet.created_at).to.not.be.empty
    });

  });

});