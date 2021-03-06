"use strict";
var util = require('../../util');
var Joi = require('@hapi/joi');
var optionsSchema = Joi.object().keys({
    lang: Joi.string(),
});
var suggestions = function () {
    return util.generateApiHandler.call(this, 'users/suggestions', optionsSchema);
};
module.exports = {
    suggestions: suggestions,
    optionsSchema: optionsSchema,
};
