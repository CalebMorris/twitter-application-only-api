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
const api_options_1 = require("./config/api-options");
const authenticate_1 = require("./actions/authenticate");
const favorites_1 = require("./actions/favorites");
const friendships_1 = require("./actions/friendships");
const search_1 = require("./actions/search");
class Twitter {
    constructor(apiKey, apiSecret, options) {
        this.authenticate = () => authenticate_1.authenticate(() => [this.apiKey, this.apiSecret], (x) => this.setToken(x));
        if (typeof apiKey !== 'string') {
            throw new TypeError('apiKey isn\'t a string');
        }
        if (typeof apiSecret !== 'string') {
            throw new TypeError('apiSecret isn\'t a string');
        }
        this.options = api_options_1.normalize(options);
        console.log(`Twitter(options=${JSON.stringify(options)}); this.options=${JSON.stringify(this.options)}`);
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.followers = new followers_1.default(this);
        this.friends = new friends_1.default(this);
        this.help = new help_1.default(this);
        this.lists = new lists_1.default(this);
        this.statuses = new statuses_1.default(this);
        this.trends = new trends_1.default(this);
        this.users = new users_1.default(this);
    }
    setToken(token) {
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            throw new Error('Unable to retrieve bearer token from local reference');
        }
        return this.token;
    }
    favorites(options) {
        return favorites_1.favorites(this.getToken(), options);
    }
    friendships(options) {
        return friendships_1.friendships(this.getToken(), options);
    }
    search(options) {
        return search_1.search(this.getToken(), options);
    }
}
exports.Twitter = Twitter;
