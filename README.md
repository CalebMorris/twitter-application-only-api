# Twitter ApplicationOnly API

[![Build Status](https://api.shippable.com/projects/5473aa56d46935d5fbbe78c1/badge?branchName=master)](https://app.shippable.com/projects/5473aa56d46935d5fbbe78c1/builds/latest)

A subset of the Twitter API can be used without a Twitter account.  
This is done by using a different [authentication](https://dev.twitter.com/docs/auth/application-only-auth) method over oAuth.  
This module handles authentication and abstracts the API endpoints to Javascript methods.  

## Example
```javascript
var Twitter  = require('twitter-app-api');

var twit = Twitter(config.apiKey, config.apiSecret);

twit.authenticate()
.then(function() {
  console.log('Authenticated');

  twit.getTweets({ screen_name:'twitterapi', count:2 })
  .then(function(tweets) {
    tweets.forEach(function(twit) {
      console.log(twit.text);
    })
  });
});


```
