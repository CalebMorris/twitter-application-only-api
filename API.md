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

Calls path `/help/configuration`

####`.help.languages()`

Calls path `/help/languages`

####`.help.privacy()`

Calls path `/help/privacy`

####`.help.tos()`

Calls path `/help/privacy`


##Favorites

####`.favorites(options)`

Calls path `/favorites/list`

Either `screen_name` or `user_id` is **required**

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `since_id`
  - `max_id`
  - `include_entities`


##Friends

####`.friends.ids(options)`

Calls path `/friends/ids`

Either `screen_name` or `user_id` is **required**

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `cursor`
  - `stringify_ids`

####`.friends.list(options)`

Either `screen_name` or `user_id` is **required**

Calls path `/friends/list`

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `cursor`
  - `skip_status`
  - `include_user_entities`


##Friendships

####`.friendships(options)`

Calls path `/friendships/show`

##Followers

####`.followers.ids(options)`

Calls path `/followers/ids`

Either `screen_name` or `user_id` is **required**

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `cursor`
  - `stringify_ids`

####`.followers.list(options)`

Calls path `/followers/list`

Either `screen_name` or `user_id` is **required**

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `cursor`
  - `skip_status`
  - `include_user_entities`


##Lists

####`.lists.list(options)`

Calls path `/lists/list`

Either `screen_name` or `user_id` is **required**

- `options`
  - `screen_name`
  - `user_id`
  - `reverse`

####`.lists.memberships(options)`

Calls path `/lists/memberships`

Either `screen_name` or `user_id` is **required**

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `cursor`
  - `filter_to_owned_lists`

####`.lists.members(options)`

Calls path `/lists/members`

####`.lists.members().show(options)`

Calls path `/lists/show`

####`.lists.ownerships(options)`

Calls path `/lists/ownerships`

Either `screen_name` or `user_id` is **required**

- `options`
  - `screen_name`
  - `user_id`
  - `count`
  - `cursor`

####`.lists.show(options)`

Calls path `/lists/show`

####`.lists.statuses(options)`

Calls path `/lists/statuses`

####`.lists.subscribers(options)`

Calls path `/lists/subscribers`

####`.lists.subscribers().show(options)`

Calls path `/lists/subscribers/show`

####`.lists.subscriptions(options)`

Calls path `/lists/subscriptions`


##Search

####`.search(options)`

Calls path `/search/tweets`


##Statuses

####`.statuses.lookup(options)`

Calls path `/statuses/lookup`

####`.statuses.oembed(options)`

Calls path `/statuses/oembed`

####`.statuses.retweeters(options)`

Calls path `/statuses/retweeters`

####`.statuses.retweets(options)`

Calls path `/statuses/retweets`

####`.statuses.show(options)`

Calls path `/statuses/show`

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

Calls path `/statuses/timeline`

Either `screen_name` or `user_id` is **required**

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

Calls path `/trends/available`

####`.trends.closest()`

Calls path `/trends/closest`

####`.trends.place(options)`

Calls path `/trends/place`

- `options`
  - `id`
  - `exclude`

##Users

####`.users.lookup(options)`

Calls path `/users/lookup`

Either `screen_name` or `user_id` is **required**

- `options`
  - `screen_name`
  - `user_id`
  - `include_entities`

####`.users.show(options)`

Calls path `/users/show`

Either `screen_name` or `user_id` is **required**

- `options`
  - `screen_name`
  - `user_id`
  - `include_entities`

####`.users.suggestions(options)`

Calls path `/users/suggestions`

- `options`
  - `lang`

####`.users.suggestions(slug)`

Calls path `/users/suggestions/:slug`

- `slug`

####`.users.suggestions(slug).members()`

Calls path `/users/suggestions/:slug/members`

- `options`
  - `slug` required
