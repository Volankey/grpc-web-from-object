import { EchoServiceClient } from './proto/EchoServiceClientPb';
import {
  createInvoker,
  GetInvokeMethodParams,
} from '@volankey/grpc-web-invoker';

const client = new EchoServiceClient('http://localhost:8080', null);
type TEchoParams = GetInvokeMethodParams<EchoServiceClient, 'echo'>;
//@ts-ignore
const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
enableDevTools([client]);
export const invoker = createInvoker(client);
export const invoke = invoker.invoke;
