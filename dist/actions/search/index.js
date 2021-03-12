"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tweets_1 = require("./tweets");
class Search {
    constructor(callHandler) {
        this.callHandler = callHandler;
    }
    tweets(options) {
        return tweets_1.searchTweets(this.callHandler, options);
    }
}
exports.default = Search;
