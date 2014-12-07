# Twitter Application Only API

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

  twit.statuses.timeline({ screen_name:'twitterapi', count:2 })
  .then(function(tweets) {
    tweets.forEach(function(twit) {
      console.log(twit.text);
    })
  });
});

```

## Support API Paths
- /help/configuration     -> .help.configuration()
- /help/languages         -> .help.languages()
- /help/privacy           -> .help.privacy()
- /help/tos               -> .help.tos()
- /favorites/list         -> .favorites(options)
- /friends/ids            -> .friends.ids(options)
- /friends/list           -> .friends.list(options)
- /friendships/show       -> .friendships(options)
- /followers/ids          -> .followers.ids(options)
- /followers/list         -> .followers.list(options)
- /lists/list             -> .lists.list(options)
- /lists/memberships      -> .lists.memberships(options)
- /lists/members          -> .lists.members(options)
- /lists/members/show     -> .lists.members().show(options)
- /lists/ownerships       -> .lists.ownerships(options)
- /lists/show             -> .lists.show(options)
- /lists/statuses         -> .lists.statuses(options)
- /lists/subscribers      -> .lists.subscribers(options)
- /lists/subscribers/show -> .lists.subscribers().show(options)
- /lists/subscriptions    -> .lists.subscriptions(options)
- /search                 -> .search(options)
- /statuses/lookup        -> .statuses.lookup(options)
- /statuses/oembed        -> .statuses.oembed(options) // format : json or xml
- /statuses/retweeters/ids-> .statuses.retweeters(options)
- /statuses/retweets/:id  -> .statuses.retweets(options)
- /statuses/show/:id      -> .statuses.show(options)
- /statuses/user_timeline -> .statuses.timeline(options)
- /trends/available       -> .trends.available()
- /trends/closest         -> .trends.closest()
- /trends/place           -> .trends.place(options)
- /users/lookup           -> .users.lookup(options)
- /users/show             -> .users.show(options)
- /users/suggestions      -> .users.suggestions(options)
- /users/suggestions/:slug-> .users.suggestions(slug)
- /users/suggestions/:slug/members -> .users.suggestions(slug).members()

## Currently Unsupport API Paths
- /search/tweets

## Requires User Authentication

- /geo/*
- /users/contributees
- /users/contributors
- /users/profile_banner
- /users/search
