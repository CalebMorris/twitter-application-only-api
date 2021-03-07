
export default abstract class TokenManagedApi {
  twit: {
    token?: string,
    options: any,
  };

  constructor(twit) {
    this.twit = twit;
  }

  protected getToken(): string {
    if (!this.twit.token) {
      throw new Error('Token not created. May need to [authenticate] first');
    }
    return this.twit.token;
  }
}