"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_managed_api_1 = __importDefault(require("../token-managed-api"));
class Lists extends token_managed_api_1.default {
    constructor(twit) {
        super(twit);
    }
    list(options) {
        return require('./list').list.call(this.twit)(this.getToken(), options);
    }
    ;
    memberships(options) {
        return require('./memberships').memberships.call(this.twit)(this.getToken(), options);
    }
    ;
    ownerships(options) {
        return require('./ownerships').ownerships.call(this.twit)(this.getToken(), options);
    }
    ;
    show(options) {
        return require('./show').show.call(this.twit)(this.getToken(), options);
    }
    ;
    statuses(options) {
        return require('./statuses').statuses.call(this.twit)(this.getToken(), options);
    }
    ;
    subscriptions(options) {
        return require('./subscriptions').subscriptions.call(this.twit)(this.getToken(), options);
    }
    ;
}
exports.default = Lists;
