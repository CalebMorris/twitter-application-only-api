import { timeline, TimelineOptions, TimelineResults } from './timeline';
import { retweets, RetweetsOptions, RetweetsResults} from './retweets';
import { retweeters, RetweetersOptions, RetweetersResults} from './retweeters';
import { lookup, LookupOptions, LookupResults } from './lookup';
import { show, ShowOptions, ShowResults } from './show';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

class Statuses {

  callHandler: AuthenticatedTwitterCallHandler

  constructor(callHandler: AuthenticatedTwitterCallHandler) {
    this.callHandler = callHandler;
  }


  timeline(options: TimelineOptions): Promise<TimelineResults> {
    return timeline(this.callHandler, options);
  }

  retweets(options: RetweetsOptions): Promise<RetweetsResults> {
    return retweets(this.callHandler, options);
  }

  retweeters(options: RetweetersOptions): Promise<RetweetersResults> {
    return retweeters(this.callHandler, options);
  }

  show(options: ShowOptions): Promise<ShowResults> {
    return show(this.callHandler, options);
  }

  lookup(options: LookupOptions): Promise<LookupResults> {
    return lookup(this.callHandler, options);
  }
}

export default Statuses;
