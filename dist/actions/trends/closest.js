"use strict";
var request = require('request');
var util = require('../../util');
var Joi = require('@hapi/joi');
var optionsSchema = Joi.object().keys({
    lat: Joi.string().required(),
    long: Joi.string().required(),
});
var closest = function () {
    return util.generateApiHandler.call(this, 'trends/closest', optionsSchema);
};
module.exports = {
    closest: closest,
    optionsSchema: optionsSchema,
};
