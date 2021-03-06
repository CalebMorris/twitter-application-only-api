import TokenManagedApi from '../token-managed-api';

class Trends extends TokenManagedApi {
  constructor(twit) {
    super(twit);
  }

  available() {
    return require('./available').available.call(this.twit)(this.getToken());
  };
  closest(options) {
    return require('./closest').closest.call(this.twit)(this.getToken(), options);
  };
  place(options) {
    return require('./place').place.call(this.twit)(this.getToken(), options);
  };

}

export default Trends;
