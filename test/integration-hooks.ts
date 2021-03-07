import mocha from 'mocha';
import { Twitter } from '../lib/twitterAppApi';

export function setupIntegrationHooks() {

  mocha.before(function() {
    if (!process.env.TWITTER_API_KEY) throw new Error('Missing Twitter API key from env');
    if (!process.env.TWITTER_API_SECRET) throw new Error('Missing Twitter API secret from env');
  });

  const twit = new Twitter(process.env.TWITTER_API_KEY, process.env.TWITTER_API_SECRET, { tweet_mode: 'extended' });

  mocha.beforeEach(async function() {
    await twit.authenticate();
  });

  return twit;

}