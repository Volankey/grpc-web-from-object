import { EchoServiceClient } from "./proto/EchoServiceClientPb";
import { createInvoker } from "invoker-grpc";

const client = new EchoServiceClient("http://localhost:8080", null);
//@ts-ignore
const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
enableDevTools([client]);
export const invoke = createInvoker(client).invoke;
