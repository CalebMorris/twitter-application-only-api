# Twitter Application Only API

[![Build Status](https://travis-ci.org/CalebMorris/twitter-application-only-api.svg?branch=master)](https://travis-ci.org/CalebMorris/twitter-application-only-api)

A subset of the Twitter API can be used without a Twitter account.  
This is done by using a different [authentication](https://dev.twitter.com/docs/auth/application-only-auth) method over oAuth.  
This module handles authentication and abstracts the API endpoints to Javascript methods.  

## Example
```javascript
var Twitter  = require('twitter-app-api');

var twit = new Twitter(config.apiKey, config.apiSecret);

twit.authenticate()
.then(function() {
  console.log('Authenticated');

  twit.statuses.timeline({ screen_name:'twitterapi', count:2 })
  .then(function(tweets) {
    tweets.forEach(function(twit) {
      console.log(twit.text);
    })
  });
});

```

## API

[API](API.md)
