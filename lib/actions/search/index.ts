import { AuthenticatedTwitterCallHandler } from "../../twitter-call-handler";
import { searchTweets, SearchTweetsOptions, SearchTweetsResults } from './tweets';

export default class Search {

  callHandler: AuthenticatedTwitterCallHandler

  constructor(callHandler: AuthenticatedTwitterCallHandler) {
    this.callHandler = callHandler;
  }

  tweets(options: SearchTweetsOptions): Promise<SearchTweetsResults> {
    return searchTweets(this.callHandler, options);
  }

}
