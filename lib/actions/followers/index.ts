import TokenManagedApi from '../token-managed-api';
import { ids } from './ids';
import { list } from './list';

class Followers extends TokenManagedApi {
  constructor(twit) {
    super(twit);
  }

  ids(options) {
    return ids(this.getToken(), options);
  }

  list(options) {
    return list(this.getToken(), options);
  }
}

export default Followers;
