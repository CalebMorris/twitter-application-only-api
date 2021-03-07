import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
import { ids } from './ids';
import { list } from './list';

class Followers {
  callHandler: AuthenticatedTwitterCallHandler

  constructor(callHandler: AuthenticatedTwitterCallHandler) {
    this.callHandler = callHandler;
  }

  ids(options) {
    return ids(this.callHandler, options);
  }

  list(options) {
    return list(this.callHandler, options);
  }
}

export default Followers;
