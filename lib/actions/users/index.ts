import TokenManagedApi from '../token-managed-api';
import { show } from './show';
import { lookup } from './lookup';

class Users extends TokenManagedApi {
  constructor(twit) {
    super(twit);
  }

  show(options) {
    return show.call(this.twit)(this.getToken(), options);
  }

  lookup(options) {
    return lookup.call(this.twit)(this.getToken(), options);
  }

}

export default Users;
