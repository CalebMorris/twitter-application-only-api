import TokenManagedApi from '../token-managed-api';

class Help extends TokenManagedApi {
  constructor(twit) {
    super(twit);
  }

  configuration(options) {
    return require('./configuration').configuration(this.getToken(), options);
  };

  languages(options) {
    return require('./languages').languages(this.getToken(), options);
  };

  privacy(options) {
    return require('./privacy').privacy(this.getToken(), options);
  };

  tos(options) {
    return require('./tos').tos(this.getToken(), options);
  };

}

export default Help;
