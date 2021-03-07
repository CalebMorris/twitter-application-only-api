# Twitter Application Only API

[![Build Status](https://travis-ci.org/CalebMorris/twitter-application-only-api.svg?branch=master)](https://travis-ci.org/CalebMorris/twitter-application-only-api)

A subset of the Twitter API can be used without a Twitter account.  
This is done by using a different [authentication](https://dev.twitter.com/docs/auth/application-only-auth) method over oAuth.  
This module handles authentication and abstracts the API endpoints to Javascript methods.  

## API Version

This package is only written to work against the [Twitter v1.1 API](https://developer.twitter.com/en/docs/api-reference-index#twitter-api-v1) and doesn't currently support the new V2 API.

## Example
```javascript
import Twitter from 'twitter-app-api'.Twitter;

async function init() {
  console.log('Authenticating client against Twitter API v1.1');
  let twit;
  try {
    twit = await Twitter.authenticate(process.env.TWITTER_API_KEY, process.env.TWITTER_API_SECRET, { tweet_mode: 'extended' });
  } catch(err) {
    console.error(err.message);
    console.error(err.body);
    process.exit(2);
  }
  console.log('Authentication completed');

  const tweets = await twit.statuses.timeline({ screen_name:'twitterapi', count:2 });
  tweets.forEach(function(twit) {
    console.log(twit.text);
  });

  // Do other stuff with the client
}
```

## API

[API](API.md)
