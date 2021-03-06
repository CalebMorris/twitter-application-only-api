import Followers from './actions/followers';
import Friends  from './actions/friends';
import Help     from './actions/help';
import Lists    from './actions/lists';
import Statuses from './actions/statuses';
import Trends   from './actions/trends';
import Users    from './actions/users';

const normalizeOptions = require('./config/api-options').normalize;

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

  authenticate = () => require('./actions/authenticate').authenticate(this.setToken);

  favorites(options) {
    return require('./actions/favorites').favorites(this.token, options);
  };

  friendships(options) {
    return require('./actions/friendships').friendships(this.token, options);
  };

  search(options) {
    return require('./actions/search').search(this.token, options);
  };

}
