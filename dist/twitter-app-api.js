"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Twitter = void 0;
const followers_1 = __importDefault(require("./actions/followers"));
const friends_1 = __importDefault(require("./actions/friends"));
const help_1 = __importDefault(require("./actions/help"));
const lists_1 = __importDefault(require("./actions/lists"));
const statuses_1 = __importDefault(require("./actions/statuses"));
const trends_1 = __importDefault(require("./actions/trends"));
const users_1 = __importDefault(require("./actions/users"));
const favorites_1 = require("./actions/favorites");
const friendships_1 = require("./actions/friendships");
const search_1 = require("./actions/search");
const twitter_call_handler_1 = require("./twitter-call-handler");
class Twitter {
    constructor(callHandler) {
        this.callHandler = callHandler;
        this.followers = new followers_1.default(callHandler);
        this.friends = new friends_1.default(callHandler);
        this.help = new help_1.default(callHandler);
        this.lists = new lists_1.default(callHandler);
        this.statuses = new statuses_1.default(callHandler);
        this.trends = new trends_1.default(callHandler);
        this.users = new users_1.default(callHandler);
    }
    static authenticate(apiKey, apiSecret, globalOptions = {}) {
        console.log(`Twitter(globalOptions=${JSON.stringify(globalOptions)})`);
        return twitter_call_handler_1.AuthenticatedTwitterCallHandler.fromApiKeys(apiKey, apiSecret, globalOptions)
            .then(callHandler => new Twitter(callHandler));
    }
    favorites(options) {
        return favorites_1.favorites(this.callHandler, options);
    }
    friendships(options) {
        return friendships_1.friendships(this.callHandler, options);
    }
    search(options) {
        return search_1.search(this.callHandler, options);
    }
}
exports.Twitter = Twitter;
