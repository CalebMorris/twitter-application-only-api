import TokenManagedApi from '../token-managed-api';
import { configuration } from './configuration';
import { languages } from './languages';
import { privacy } from './privacy';
import { tos } from './tos';

class Help extends TokenManagedApi {
  constructor(twit) {
    super(twit);
  }

  configuration(options) {
    return configuration(this.getToken(), options);
  }

  languages(options) {
    return languages(this.getToken(), options);
  }

  privacy(options) {
    return privacy(this.getToken(), options);
  }

  tos(options) {
    return tos(this.getToken(), options);
  }

}

export default Help;
