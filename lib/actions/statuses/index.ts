import { timeline, TimelineOptions, TimelineResults } from './timeline';
import { retweets, RetweetsOptions, RetweetsResults} from './retweets';
import { retweeters, RetweetersOptions, RetweetersResults} from './retweeters';
import { lookup, LookupOptions, LookupResults } from './lookup';
import { show, ShowOptions, ShowResults } from './show';
import TokenManagedApi from '../token-managed-api';

class Statuses extends TokenManagedApi {
  constructor(twit) {
    super(twit);
  }

  timeline(options: TimelineOptions): Promise<TimelineResults> {
    return timeline(this.getToken(), {...this.twit.options, ...options});
  }

  retweets(options: RetweetsOptions): Promise<RetweetsResults> {
    return retweets.call(this.twit)(this.getToken(), {...this.twit.options, ...options});
  }

  retweeters(options: RetweetersOptions): Promise<RetweetersResults> {
    return retweeters.call(this.twit)(this.getToken(), {...this.twit.options, ...options});
  }

  show(options: ShowOptions): Promise<ShowResults> {
    return show.call(this.twit)(this.getToken(), {...this.twit.options, ...options});
  }

  lookup(options: LookupOptions): Promise<LookupResults> {
    return lookup.call(this.twit)(this.getToken(), {...this.twit.options, ...options});
  }
}

export default Statuses;
