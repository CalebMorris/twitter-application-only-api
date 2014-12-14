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

Either `screen_name` or `user_id` is required

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `since_id`
  - `max_id`
  - `include_entities`

##Friends

####`.friends.ids(options)`

Either `screen_name` or `user_id` is required

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `cursor`
  - `stringify_ids`

####`.friends.list(options)`

Either `screen_name` or `user_id` is required

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `cursor`
  - `skip_status`
  - `include_user_entities`

##Friendships

####`.friendships(options)`

##Followers

####`.followers.ids(options)`

Either `screen_name` or `user_id` is required

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `cursor`
  - `stringify_ids`

####`.followers.list(options)`

Either `screen_name` or `user_id` is required

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `cursor`
  - `skip_status`
  - `include_user_entities`

##Lists

####`.lists.list(options)`

Either `screen_name` or `user_id` is required

- `options`
  - `screen_name`
  - `user_id`
  - `reverse`

####`.lists.memberships(options)`

Either `screen_name` or `user_id` is required

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `cursor`
  - `filter_to_owned_lists`

####`.lists.members(options)`

####`.lists.members().show(options)`

####`.lists.ownerships(options)`

Either `screen_name` or `user_id` is required

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `cursor`

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

- `options`
  - `q`
  - `result_type`
  - `geocode`
  - `lang`
  - `count`
  - `until`
  - `since_id`
  - `max_id`

####`.statuses.timeline(options)`

Either `screen_name` or `user_id` is required

- `options`
  - `screen_name`
  - `user_id`
  - `since_id`
  - `count`
  - `max_id`
  - `trim_user`
  - `exclude_replies`
  - `contributor_details`
  - `include_rts`

##Trends

####`.trends.available()`

####`.trends.closest()`

####`.trends.place(options)`

- `options`
  - `id`
  - `exclude`

##Users

####`.users.lookup(options)`

Either `screen_name` or `user_id` is required

- `options`
  - `screen_name`
  - `user_id`
  - `include_entities`

####`.users.show(options)`

Either `screen_name` or `user_id` is required

- `options`
  - `screen_name`
  - `user_id`
  - `include_entities`

####`.users.suggestions(options)`

- `options`
  - `lang`

####`.users.suggestions(slug)`

- `slug`

####`.users.suggestions(slug).members()`

- `options`
  - `slug` required
