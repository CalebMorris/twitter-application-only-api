import Followers from './actions/followers';
import Friends from './actions/friends';
import Help from './actions/help';
import Lists from './actions/lists';
import Statuses from './actions/statuses';
import Trends from './actions/trends';
import Users from './actions/users';
import Search from './actions/search';
import { AuthenticatedTwitterCallHandler, GlobalOptions } from './twitter-call-handler';
export declare class Twitter {
    callHandler: AuthenticatedTwitterCallHandler;
    followers: Followers;
    friends: Friends;
    help: Help;
    lists: Lists;
    statuses: Statuses;
    trends: Trends;
    users: Users;
    search: Search;
    static authenticate(apiKey: string, apiSecret: string, globalOptions?: GlobalOptions): Promise<Twitter>;
    constructor(callHandler: AuthenticatedTwitterCallHandler);
    favorites(options: any): Promise<any>;
    friendships(options: any): Promise<any>;
}
