import util from '../../util';

export const available = function() {
  return util.generateNoSchemaHandler.call(this, 'trends/available');
};
