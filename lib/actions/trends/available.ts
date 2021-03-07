import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export function available(callHandler: AuthenticatedTwitterCallHandler): Promise<any> {
  return callHandler.callTwitterApi('trends/available');
}