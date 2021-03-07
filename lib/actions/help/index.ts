import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
import { configuration } from './configuration';
import { languages } from './languages';

class Help {

  callHandler: AuthenticatedTwitterCallHandler

  constructor(callHandler: AuthenticatedTwitterCallHandler) {
    this.callHandler = callHandler;
  }

  configuration(): Promise<any> {
    return configuration(this.callHandler);
  }

  languages(): Promise<any> {
    return languages(this.callHandler);
  }

}

export default Help;
