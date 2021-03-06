"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TokenManagedApi {
    constructor(twit) {
        this.twit = twit;
    }
    getToken() {
        if (!this.twit.token) {
            throw new Error('Token not created. May need to [authenticate] first');
        }
        return this.twit.token;
    }
}
exports.default = TokenManagedApi;
