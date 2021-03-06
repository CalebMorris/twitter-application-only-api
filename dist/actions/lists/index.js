"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_managed_api_1 = __importDefault(require("../token-managed-api"));
const list_1 = require("./list");
const memberships_1 = require("./memberships");
const ownerships_1 = require("./ownerships");
const show_1 = require("./show");
const statuses_1 = require("./statuses");
const subscriptions_1 = require("./subscriptions");
class Lists extends token_managed_api_1.default {
    constructor(twit) {
        super(twit);
    }
    list(options) {
        return list_1.list.call(this.twit)(this.getToken(), options);
    }
    memberships(options) {
        return memberships_1.memberships.call(this.twit)(this.getToken(), options);
    }
    ownerships(options) {
        return ownerships_1.ownerships.call(this.twit)(this.getToken(), options);
    }
    show(options) {
        return show_1.show.call(this.twit)(this.getToken(), options);
    }
    statuses(options) {
        return statuses_1.statuses.call(this.twit)(this.getToken(), options);
    }
    subscriptions(options) {
        return subscriptions_1.subscriptions.call(this.twit)(this.getToken(), options);
    }
}
exports.default = Lists;
