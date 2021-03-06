var request = require('request');

function TwitterApiError(message, body) {
  this.name = 'TwitterApiError';
  this.message = message;
  this.body = body;
  this.statck = new Error().stack;
}
TwitterApiError.prototype = Error.prototype;

var authenticate = function(setToken: (string) => void) {
  var credentials = new Buffer(this.apiKey + ':' + this.apiSecret).toString('base64');

  var options = {
    url     : 'https://api.twitter.com/oauth2/token',
    method  : 'POST',
    headers : {
      'Authorization'  : 'Basic ' + credentials,
      'Content-Length' : 29,
      'Content-Type'   : 'application/x-www-form-urlencoded;charset=UTF-8',
      'User-Agent'     : 'request'
    },
    body    : 'grant_type=client_credentials'
  };

  return new Promise<string>(function(resolve, reject) {
    request.post(options, function(error, response, body) {
      if (error) {
        throw error;
      }
      if (response.statusCode === 200) {
        if (! body) {
          throw new Error('Missing body from auth request');
        }

        var info = JSON.parse(body);
        if (info.token_type !== 'bearer') {
          throw new Error('Response token was of the wrong type: ' + info.token_type);
        }

        setToken(info.access_token);
        resolve(info.access_token);
      }
      else {
        reject(new TwitterApiError(
          'There was a problem retrieving the bearer token',
          body ? JSON.parse(body) : '')
        );
      }
    });
  });

};

module.exports = {
  authenticate : authenticate,
};
