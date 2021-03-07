import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
import { list } from './list';
import { memberships } from './memberships';
import { ownerships } from './ownerships';
import { show } from './show';
import { statuses } from './statuses';
import { subscriptions } from './subscriptions';

class Lists {

  callHandler: AuthenticatedTwitterCallHandler

  constructor(callHandler: AuthenticatedTwitterCallHandler) {
    this.callHandler = callHandler;
  }


  list(options) {
    return list(this.callHandler, options);
  }

  memberships(options) {
    return memberships(this.callHandler, options);
  }

  ownerships(options) {
    return ownerships(this.callHandler, options);
  }

  show(options) {
    return show(this.callHandler, options);
  }

  statuses(options) {
    return statuses(this.callHandler, options);
  }

  subscriptions(options) {
    return subscriptions(this.callHandler, options);
  }

}

export default Lists;
