import Followers from './actions/followers';
import Friends  from './actions/friends';
import Help     from './actions/help';
import Lists    from './actions/lists';
import Statuses from './actions/statuses';
import Trends   from './actions/trends';
import Users    from './actions/users';
import { normalize as normalizeOptions } from './config/api-options'
import { authenticate } from './actions/authenticate';
import { favorites } from './actions/favorites';
import { friendships } from './actions/friendships';
import { search } from './actions/search';

export class Twitter {
  apiKey: string; // TODO: remove
  apiSecret: string; // TODO: remove. Shouldn't be in memory
  options: any; // TODO: change to actual typed options
  token?: string;

  followers: Followers;
  friends  : Friends;
  help     : Help;
  lists    : Lists;
  statuses : Statuses;
  trends   : Trends;
  users    : Users;

  constructor(apiKey: string, apiSecret: string, options: any) {
    if (typeof apiKey !== 'string') {
      throw new TypeError('apiKey isn\'t a string');
    }
    if (typeof apiSecret !== 'string') {
      throw new TypeError('apiSecret isn\'t a string');
    }

    this.options = normalizeOptions(options);
    console.log(`Twitter(options=${JSON.stringify(options)}); this.options=${JSON.stringify(this.options)}`);
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;

    this.followers= new Followers(this);
    this.friends  = new Friends(this);
    this.help     = new Help(this);
    this.lists    = new Lists(this);
    this.statuses = new Statuses(this);
    this.trends   = new Trends(this);
    this.users    = new Users(this);
  }

  private setToken(token: string) {
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      throw new Error('Unable to retrieve bearer token from local reference');
    }
    return this.token;
  }

  authenticate = () => authenticate(() => [this.apiKey, this.apiSecret], (x: string) => this.setToken(x));

  favorites(options) {
    return favorites(this.getToken(), {...this.options, ...options});
  }

  friendships(options) {
    return friendships(this.getToken(), {...this.options, ...options});
  }

  search(options) {
    return search(this.getToken(), {...this.options, ...options});
  }

}
