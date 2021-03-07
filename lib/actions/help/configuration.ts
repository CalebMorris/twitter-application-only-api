import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export function configuration(callHandler: AuthenticatedTwitterCallHandler): Promise<any> {
  return callHandler.callTwitterApi('help/configuration');
}
