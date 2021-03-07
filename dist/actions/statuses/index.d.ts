import { TimelineOptions, TimelineResults } from './timeline';
import { RetweetsOptions, RetweetsResults } from './retweets';
import { RetweetersOptions, RetweetersResults } from './retweeters';
import { LookupOptions, LookupResults } from './lookup';
import { ShowOptions, ShowResults } from './show';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
declare class Statuses {
    callHandler: AuthenticatedTwitterCallHandler;
    constructor(callHandler: AuthenticatedTwitterCallHandler);
    timeline(options: TimelineOptions): Promise<TimelineResults>;
    retweets(options: RetweetsOptions): Promise<RetweetsResults>;
    retweeters(options: RetweetersOptions): Promise<RetweetersResults>;
    show(options: ShowOptions): Promise<ShowResults>;
    lookup(options: LookupOptions): Promise<LookupResults>;
}
export default Statuses;
