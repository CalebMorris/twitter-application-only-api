"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./list");
const memberships_1 = require("./memberships");
const ownerships_1 = require("./ownerships");
const show_1 = require("./show");
const statuses_1 = require("./statuses");
const subscriptions_1 = require("./subscriptions");
class Lists {
    constructor(callHandler) {
        this.callHandler = callHandler;
    }
    list(options) {
        return list_1.list(this.callHandler, options);
    }
    memberships(options) {
        return memberships_1.memberships(this.callHandler, options);
    }
    ownerships(options) {
        return ownerships_1.ownerships(this.callHandler, options);
    }
    show(options) {
        return show_1.show(this.callHandler, options);
    }
    statuses(options) {
        return statuses_1.statuses(this.callHandler, options);
    }
    subscriptions(options) {
        return subscriptions_1.subscriptions(this.callHandler, options);
    }
}
exports.default = Lists;
