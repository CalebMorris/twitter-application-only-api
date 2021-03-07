import axios from 'axios';

function TwitterApiError(message, body) {
  this.name = 'TwitterApiError';
  this.message = message;
  this.body = body;
  this.statck = new Error().stack;
}
TwitterApiError.prototype = Error.prototype;

export async function authenticate(getKeys: () => string[], setToken: (string) => void): Promise<string> {
  const [key, sec] = getKeys();
  const credentials = Buffer.from(key + ':' + sec).toString('base64')

  const response = await axios.post(
    'https://api.twitter.com/oauth2/token',
    'grant_type=client_credentials',
    {
      headers : {
        'Authorization'  : 'Basic ' + credentials,
        'Content-Length' : 29,
        'Content-Type'   : 'application/x-www-form-urlencoded;charset=UTF-8',
        'User-Agent'     : 'request'
      },
    }
  );

  if (response.status != 200) {
    new TwitterApiError('There was a problem retrieving the bearer token', response.data)
  }

  if (! response.data) {
    throw new Error('Missing body from auth request');
  }

  if (response.data.token_type !== 'bearer') {
    throw new Error(`Response token was of the wrong type: [${response.data.token_type}]`);
  }

  setToken(response.data.access_token);
  return response.data.access_token;

}
