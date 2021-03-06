var util = require('../../util');

var available = function() {
  return util.generateNoSchemaHandler.call(this, 'trends/available');
};

module.exports = {
  available : available,
};
