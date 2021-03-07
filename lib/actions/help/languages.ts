import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export function languages(callHandler: AuthenticatedTwitterCallHandler): Promise<any> {
  return callHandler.callTwitterApi('help/languages');
}
