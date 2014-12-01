# Twitter ApplicationOnly API

[![Build Status](https://api.shippable.com/projects/5473aa56d46935d5fbbe78c1/badge?branchName=master)](https://app.shippable.com/projects/5473aa56d46935d5fbbe78c1/builds/latest)

A subset of the Twitter API can be used without a Twitter account.  
This is done by using a different [authentication](https://dev.twitter.com/docs/auth/application-only-auth) method over oAuth.  
This module handles authentication and abstracts the API endpoints to Javascript methods.  

## Support API Paths
1. /friends/ids            -> .friends(options)
2. /followers/ids          -> .followers(options)
3. /search                 -> .search(options)
4. /statuses/user_timeline -> .statuses.timeline(options)

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
- /favorites/list
- /followers/list
- /friendships/show
- /friends/list
- /geo/id/:place_id
- /geo/reverse_geocode
- /geo/search
- /geo/similar_places
- /help/configuration
- /help/languages
- /help/privacy
- /help/tos
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
- /statuses/lookup
- /statuses/oembed
- /statuses/retweeters/ids
- /statuses/retweets/:id
- /statuses/show/:id
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

