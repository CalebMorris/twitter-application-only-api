"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.available = void 0;
function available(callHandler) {
    return callHandler.callTwitterApi('trends/available');
}
exports.available = available;
