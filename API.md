#API Reference

- [Core](#core)
    - [`new Twit(twitterAPIKey, twitterAPISecret)`](#new-twittwitterapikey-twitterapisecret----twit-object)
    - [`.authorize()`](#authorized----promise)
- [Help](#help)
    - [`.help.configuration()`](#helpconfiguration)
    - [`.help.languages()`](#helplanguages)
    - [`.help.privacy()`](#helpprivacy)
    - [`.help.tos()`](#helptos)
- [Favorites](#favorites)
    - [`.favorites(options)`](#favoritesoptions)
- [Friends](#fiends)
    - [`.friends.ids(options)`](#friendsidsoptions)
    - [`.friends.list(options)`](#friendslistoptions)
- [Friendships](#friendships)
    - [`.friendships(options)`](#friendshipsoptions)
- [Followers](#followers)
    - [`.followers.ids(options)`](#followersidsoptions)
    - [`.followers.list(options)`](#followerslistoptions)
- [Lists](#lists)
    - [`.lists.list(options)`](#listslistoptions)
    - [`.lists.memberships(options)`](#listsmembershipsoptions)
    - [`.lists.members(options)`](#listsmembersoptions)
    - [`.lists.members().show(options)`](#listsmembersshowoptions)
    - [`.lists.ownerships(options)`](#listsownershipsoptions)
    - [`.lists.show(options)`](#listsshowoptions)
    - [`.lists.statuses(options)`](#listsstatusesoptions)
    - [`.lists.subscribers(options)`](#listssubscribersoptions)
    - [`.lists.subscribers().show(options)`](#listssubscribersshowoptions)
    - [`.lists.subscriptions(options)`](#listssubscriptionsoptions)
- [Search](#search)
    - [`.search(options)`](#searchoptions)
- [Statuses](#statuses)
    - [`.statuses.lookup(options)`](#statuseslookupoptions)
    - [`.statuses.oembed(options)`](#statusesoembedoptions)
    - [`.statuses.retweeters(options)`](#statusesretweetersoptions)
    - [`.statuses.retweets(options)`](#statusesretweetsoptions)
    - [`.statuses.show(options)`](#statusesshowoptions)
    - [`.statuses.timeline(options)`](#statusestimelineoptions)
- [Trends](#trends)
    - [`.trends.available()`](#trendsavailable)
    - [`.trends.closest()`](#trendsclosest)
    - [`.trends.place(options)`](#trendsplaceoptions)
- [Users](#users)
    - [`.users.lookup(options)`](#userslookupoptions)
    - [`.users.show(options)`](#usersshowoptions)
    - [`.users.suggestions(options)`](#userssuggestionsoptions)
    - [`.users.suggestions(slug)`](#userssuggestionsslug)
    - [`.users.suggestions(slug).members()`](#userssuggestionsslugmembers)

##Core

#####`new Twit(twitterAPIKey, twitterAPISecret)` -> `Twit Object`

Create a new Twitter handler object.

Example:

```js
var Twitter = require('twitter-app-api');

var twit = new Twitter(TWITTER_KEY, TWITTER_SECRET);
```

#####`.authorize()` -> `Promise`

Authorize application and generate bearer token.

Example:

```js
twit.authorize()
.then(function() { console.log('Authorized'); });
```

##Help

####`.help.configuration()`

####`.help.configuration()`

####`.help.languages()`

####`.help.privacy()`

####`.help.tos()`

##Favorites

####`.favorites(options)`

##Friends

####`.friends.ids(options)`

####`.friends.list(options)`

##Friendships

####`.friendships(options)`

##Followers

####`.followers.ids(options)`

####`.followers.list(options)`

##Lists

####`.lists.list(options)`

####`.lists.memberships(options)`

####`.lists.members(options)`

####`.lists.members().show(options)`

####`.lists.ownerships(options)`

####`.lists.show(options)`

####`.lists.statuses(options)`

####`.lists.subscribers(options)`

####`.lists.subscribers().show(options)`

####`.lists.subscriptions(options)`

##Search

####`.search(options)`

##Statuses

####`.statuses.lookup(options)`

####`.statuses.oembed(options)`

####`.statuses.retweeters(options)`

####`.statuses.retweets(options)`

####`.statuses.show(options)`

####`.statuses.timeline(options)`

##Trends

####`.trends.available()`

####`.trends.closest()`

####`.trends.place(options)`

##Users

####`.users.lookup(options)`

####`.users.show(options)`

####`.users.suggestions(options)`

####`.users.suggestions(slug)`

####`.users.suggestions(slug).members()`
