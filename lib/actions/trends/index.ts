import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
import { available } from './available';
import { closest } from './closest';
import { place } from './place';

class Trends {

  callHandler: AuthenticatedTwitterCallHandler

  constructor(callHandler: AuthenticatedTwitterCallHandler) {
    this.callHandler = callHandler;
  }

  available(): Promise<any> {
    return available(this.callHandler);
  }

  closest(options): Promise<any> {
    return closest(this.callHandler, options);
  }

  place(options): Promise<any> {
    return place(this.callHandler, options);
  }

}

export default Trends;
