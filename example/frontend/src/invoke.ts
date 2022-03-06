import { EchoServiceClient } from './proto/EchoServiceClientPb';
import { createInvoker } from '@volankey/grpc-web-invoker';

const client = new EchoServiceClient('http://localhost:8080', null);
//@ts-ignore
const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
enableDevTools([client]);
export const invoke = createInvoker(client).invoke;
