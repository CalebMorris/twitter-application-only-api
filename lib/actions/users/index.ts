import TokenManagedApi from '../token-managed-api';

class Users extends TokenManagedApi {
  constructor(twit) {
    super(twit);
  }

  show(options) {
    return require('./show').show.call(this.twit)(this.getToken(), options);
  };
  lookup(options) {
    return require('./lookup').lookup.call(this.twit)(this.getToken(), options);
  };

}

export default Users;
