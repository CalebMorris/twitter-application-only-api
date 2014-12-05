# Twitter ApplicationOnly API

[![Build Status](https://api.shippable.com/projects/5473aa56d46935d5fbbe78c1/badge?branchName=master)](https://app.shippable.com/projects/5473aa56d46935d5fbbe78c1/builds/latest)

A subset of the Twitter API can be used without a Twitter account.  
This is done by using a different [authentication](https://dev.twitter.com/docs/auth/application-only-auth) method over oAuth.  
This module handles authentication and abstracts the API endpoints to Javascript methods.  

## Support API Paths
- /help/configuration     -> .help.configuration()
- /help/languages         -> .help.languages()
- /help/privacy           -> .help.privacy()
- /help/tos               -> .help.tos()
- /favorites/list         -> .favorites(options)
- /friends/ids            -> .friends(options)
- /friendships/show       -> .friendships(options)
- /followers/ids          -> .followers(options)
- /search                 -> .search(options)
- /statuses/lookup        -> .statuses.lookup(options)
- /statuses/oembed        -> .statuses.oembed(options) // format : json or xml
- /statuses/retweeters/ids-> .statuses.retweeters(options)
- /statuses/retweets/:id  -> .statuses.retweets(options)
- /statuses/show/:id      -> .statuses.show(options)
- /statuses/user_timeline -> .statuses.timeline(options)

## Example
```javascript
var Twitter  = require('twitter-app-api');

var twit = Twitter(config.apiKey, config.apiSecret);

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

## Currently Unsupport API Paths
- /followers/list
- /friends/list
- /lists/list
- /lists/members
- /lists/memberships
- /lists/members/show
- /lists/ownerships
- /lists/show
- /lists/statuses
- /lists/subscribers
- /lists/subscribers/show
- /lists/subscriptions
- /search/tweets
- /trends/available
- /trends/closest
- /trends/place
- /users/contributees
- /users/contributors
- /users/lookup
- /users/profile_banner
- /users/search
- /users/show
- /users/suggestions
- /users/suggestions/:slug
- /users/suggestions/:slug/members

