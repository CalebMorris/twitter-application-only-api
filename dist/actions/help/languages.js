"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languages = void 0;
function languages(callHandler) {
    return callHandler.callTwitterApi('help/languages');
}
exports.languages = languages;
