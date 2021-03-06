import TokenManagedApi from '../token-managed-api';
import { list } from './list';
import { memberships } from './memberships';
import { ownerships } from './ownerships';
import { show } from './show';
import { statuses } from './statuses';
import { subscriptions } from './subscriptions';

class Lists extends TokenManagedApi {
  constructor(twit) {
    super(twit);
  }

  list(options) {
    return list.call(this.twit)(this.getToken(), options);
  }

  memberships(options) {
    return memberships.call(this.twit)(this.getToken(), options);
  }

  ownerships(options) {
    return ownerships.call(this.twit)(this.getToken(), options);
  }

  show(options) {
    return show.call(this.twit)(this.getToken(), options);
  }

  statuses(options) {
    return statuses.call(this.twit)(this.getToken(), options);
  }

  subscriptions(options) {
    return subscriptions.call(this.twit)(this.getToken(), options);
  }

}

export default Lists;
