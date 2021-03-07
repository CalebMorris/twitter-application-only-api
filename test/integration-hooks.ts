import mocha from 'mocha';
import { Twitter } from '../lib/twitter-app-api';

export function setupIntegrationHooks(): void {

  mocha.before(async function() {
    if (typeof process.env.TWITTER_API_KEY != 'string' || process.env.TWITTER_API_KEY.length < 1) throw new Error('Missing Twitter API key from env');
    if (typeof process.env.TWITTER_API_SECRET != 'string' || process.env.TWITTER_API_SECRET.length < 1) throw new Error('Missing Twitter API secret from env');
    this.twit = await Twitter.authenticate(process.env.TWITTER_API_KEY, process.env.TWITTER_API_SECRET, { tweet_mode: 'extended' });
  });

}