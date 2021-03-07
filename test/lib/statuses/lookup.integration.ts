/* global describe, it, beforeEach, afterEach */

import { expect } from 'chai';
import { FullUser } from 'twitter-d';
import { Twitter } from '../../../lib/twitter-app-api';
import { setupIntegrationHooks } from '../../integration-hooks';

describe('statuses/lookup', function() {

  describe('integration', function() {

    setupIntegrationHooks();

    it ('single tweet lookup', async function() {
      const id = '1367513918235693065';
      const twit: Twitter = this.twit;
      const results = await twit.statuses.lookup({id})
      expect(results).to.not.be.null;
      expect(results.length).to.eq(1);
      expect(results[0].id_str).to.eq(id);
      expect(results[0].user).to.not.be.empty
      const user = results[0].user as FullUser;
      expect(user.name).to.not.be.empty
      expect(user.screen_name).to.not.be.empty
      expect(user.profile_image_url_https).to.not.be.empty
      expect(results[0].full_text).to.not.be.empty
      expect(results[0].created_at).to.not.be.empty
    });

    it ('multiple tweet lookup', async function() {
      const twit: Twitter = this.twit;
      const id1 = '1367513918235693065';
      const id2 = '1362807242932813825';
      const ids = `${id1},${id2}`;
      const results = await twit.statuses.lookup({id: ids})
      expect(results).to.not.be.null;
      expect(results.length).to.eq(2);
      expect(results[0].id_str).to.eq(id1);
      expect(results[1].id_str).to.eq(id2);
    });

  });

});