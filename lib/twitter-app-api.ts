import Followers from './actions/followers';
import Friends from './actions/friends';
import Help from './actions/help';
import Lists from './actions/lists';
import Statuses from './actions/statuses';
import Trends from './actions/trends';
import Users from './actions/users';
import Search from './actions/search';
import { favorites } from './actions/favorites';
import { friendships } from './actions/friendships';
import { AuthenticatedTwitterCallHandler, GlobalOptions } from './twitter-call-handler';

export class Twitter {
  callHandler: AuthenticatedTwitterCallHandler;

  followers: Followers;
  friends: Friends;
  help: Help;
  lists: Lists;
  statuses: Statuses;
  trends: Trends;
  users: Users;
  search: Search;

  static authenticate(apiKey: string, apiSecret: string, globalOptions: GlobalOptions = {}): Promise<Twitter> {
    console.log(`Twitter(globalOptions=${JSON.stringify(globalOptions)})`);
    return AuthenticatedTwitterCallHandler.fromApiKeys(apiKey, apiSecret, globalOptions)
      .then(callHandler => new Twitter(callHandler));
  }

  constructor(callHandler: AuthenticatedTwitterCallHandler) {
    this.callHandler = callHandler;

    this.followers = new Followers(callHandler);
    this.friends = new Friends(callHandler);
    this.help = new Help(callHandler);
    this.lists = new Lists(callHandler);
    this.statuses = new Statuses(callHandler);
    this.trends = new Trends(callHandler);
    this.users = new Users(callHandler);
    this.search = new Search(callHandler);
  }

  favorites(options: any): Promise<any> {
    return favorites(this.callHandler, options);
  }

  friendships(options: any): Promise<any> {
    return friendships(this.callHandler, options);
  }

}
