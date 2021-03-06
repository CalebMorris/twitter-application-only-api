import TokenManagedApi from '../token-managed-api';
import { available } from './available';
import { closest } from './closest';
import { place } from './place';

class Trends extends TokenManagedApi {
  constructor(twit) {
    super(twit);
  }

  available(options) {
    return available.call(this.twit)(this.getToken(), options);
  }

  closest(options) {
    return closest.call(this.twit)(this.getToken(), options);
  }

  place(options) {
    return place.call(this.twit)(this.getToken(), options);
  }

}

export default Trends;
