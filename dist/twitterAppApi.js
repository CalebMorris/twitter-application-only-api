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
const normalizeOptions = require('./config/api-options').normalize;
class Twitter {
    constructor(apiKey, apiSecret, options) {
        this.authenticate = () => require('./actions/authenticate').authenticate(() => [this.apiKey, this.apiSecret], (x) => this.setToken(x));
        if (typeof apiKey !== 'string') {
            throw new TypeError('apiKey isn\'t a string');
        }
        if (typeof apiSecret !== 'string') {
            throw new TypeError('apiSecret isn\'t a string');
        }
        this.options = normalizeOptions(options);
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
    favorites(options) {
        return require('./actions/favorites').favorites(this.token, options);
    }
    ;
    friendships(options) {
        return require('./actions/friendships').friendships(this.token, options);
    }
    ;
    search(options) {
        return require('./actions/search').search(this.token, options);
    }
    ;
}
exports.Twitter = Twitter;
