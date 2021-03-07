import TokenManagedApi from '../token-managed-api';
declare class Help extends TokenManagedApi {
    constructor(twit: any);
    configuration(options: any): Promise<any>;
    languages(options: any): Promise<any>;
    privacy(options: any): Promise<any>;
    tos(options: any): Promise<any>;
}
export default Help;
