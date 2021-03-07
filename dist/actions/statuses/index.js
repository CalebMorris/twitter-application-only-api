"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timeline_1 = require("./timeline");
const retweets_1 = require("./retweets");
const retweeters_1 = require("./retweeters");
const lookup_1 = require("./lookup");
const show_1 = require("./show");
class Statuses {
    constructor(callHandler) {
        this.callHandler = callHandler;
    }
    timeline(options) {
        return timeline_1.timeline(this.callHandler, options);
    }
    retweets(options) {
        return retweets_1.retweets(this.callHandler, options);
    }
    retweeters(options) {
        return retweeters_1.retweeters(this.callHandler, options);
    }
    show(options) {
        return show_1.show(this.callHandler, options);
    }
    lookup(options) {
        return lookup_1.lookup(this.callHandler, options);
    }
}
exports.default = Statuses;
