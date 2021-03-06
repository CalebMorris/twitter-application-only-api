import Followers from './actions/followers';
import Friends from './actions/friends';
import Help from './actions/help';
import Lists from './actions/lists';
import Statuses from './actions/statuses';
import Trends from './actions/trends';
import Users from './actions/users';
export declare class Twitter {
    apiKey: string;
    apiSecret: string;
    options: any;
    token?: string;
    followers: Followers;
    friends: Friends;
    help: Help;
    lists: Lists;
    statuses: Statuses;
    trends: Trends;
    users: Users;
    constructor(apiKey: string, apiSecret: string, options: any);
    private setToken;
    authenticate: () => any;
    favorites(options: any): any;
    friendships(options: any): any;
    search(options: any): any;
}
