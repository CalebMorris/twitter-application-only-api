import TokenManagedApi from '../token-managed-api';

class Followers extends TokenManagedApi {
  constructor(twit) {
    super(twit);
  }

  ids(options) {
    return require('./ids').ids(this.getToken(), options);
  }

  list(options) {
    return require('./list').list(this.getToken(), options);
  }
}

export default Followers;
