import { TimelineOptions, TimelineResults } from './timeline';
import { RetweetsOptions, RetweetsResults } from './retweets';
import { RetweetersOptions, RetweetersResults } from './retweeters';
import { LookupOptions, LookupResults } from './lookup';
import { ShowOptions, ShowResults } from './show';
import TokenManagedApi from '../token-managed-api';
declare class Statuses extends TokenManagedApi {
    constructor(twit: any);
    timeline(options: TimelineOptions): Promise<TimelineResults>;
    retweets(options: RetweetsOptions): Promise<RetweetsResults>;
    retweeters(options: RetweetersOptions): Promise<RetweetersResults>;
    show(options: ShowOptions): Promise<ShowResults>;
    lookup(options: LookupOptions): Promise<LookupResults>;
}
export default Statuses;
