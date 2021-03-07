"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const timeline_1 = require("./timeline");
const retweets_1 = require("./retweets");
const retweeters_1 = require("./retweeters");
const lookup_1 = require("./lookup");
const show_1 = require("./show");
const token_managed_api_1 = __importDefault(require("../token-managed-api"));
class Statuses extends token_managed_api_1.default {
    constructor(twit) {
        super(twit);
    }
    timeline(options) {
        return timeline_1.timeline(this.getToken(), Object.assign(Object.assign({}, this.twit.options), options));
    }
    retweets(options) {
        return retweets_1.retweets.call(this.twit)(this.getToken(), Object.assign(Object.assign({}, this.twit.options), options));
    }
    retweeters(options) {
        return retweeters_1.retweeters.call(this.twit)(this.getToken(), Object.assign(Object.assign({}, this.twit.options), options));
    }
    show(options) {
        return show_1.show.call(this.twit)(this.getToken(), Object.assign(Object.assign({}, this.twit.options), options));
    }
    lookup(options) {
        return lookup_1.lookup.call(this.twit)(this.getToken(), Object.assign(Object.assign({}, this.twit.options), options));
    }
}
exports.default = Statuses;
