# Twitter ApplicationOnly API

A subset of the Twitter API can be used without a Twitter account.  
This is done by using a different [authentication](https://dev.twitter.com/docs/auth/application-only-auth) method over oAuth.  
This module handles authentication and abstracts the API endpoints to Javascript methods.  

## Example
```javascript
var Twitter  = require('twitter-app-api');

new Twitter(config.apiKey, config.apiSecret, function (handler) {
  handler.getTweets({ screen_name:'twitterapi', count:2 }, function(tweets) {
    tweets.forEach(function(twit) {
      console.log(twit.text);
    })
  });
});

```