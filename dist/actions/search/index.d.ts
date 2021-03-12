import { AuthenticatedTwitterCallHandler } from "../../twitter-call-handler";
import { SearchTweetsOptions, SearchTweetsResults } from './tweets';
export default class Search {
    callHandler: AuthenticatedTwitterCallHandler;
    constructor(callHandler: AuthenticatedTwitterCallHandler);
    tweets(options: SearchTweetsOptions): Promise<SearchTweetsResults>;
}
