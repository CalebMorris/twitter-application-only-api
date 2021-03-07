import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
import { ids } from './ids';
import { list } from './list';

class Friends {

  callHandler: AuthenticatedTwitterCallHandler

  constructor(callHandler: AuthenticatedTwitterCallHandler) {
    this.callHandler = callHandler;
  }

  ids(options: any): Promise<any> {
    return ids(this.callHandler, options);
  }
  
  list(options: any): Promise<any> {
    return list(this.callHandler, options);
  }
}

export default Friends;
