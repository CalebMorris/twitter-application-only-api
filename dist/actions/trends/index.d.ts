import TokenManagedApi from '../token-managed-api';
declare class Trends extends TokenManagedApi {
    constructor(twit: any);
    available(): any;
    closest(options: any): any;
    place(options: any): any;
}
export default Trends;
