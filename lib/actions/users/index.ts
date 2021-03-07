import { show } from './show';
import { lookup } from './lookup';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

class Users {

  callHandler: AuthenticatedTwitterCallHandler

  constructor(callHandler: AuthenticatedTwitterCallHandler) {
    this.callHandler = callHandler;
  }

  show(options): Promise<any> {
    return show(this.callHandler, options);
  }

  lookup(options): Promise<any> {
    return lookup(this.callHandler, options);
  }

}

export default Users;
