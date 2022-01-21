import { EchoServiceClient } from "../proto/EchoServiceClientPb";
import { createInvoker } from "./createGrpcWebInvoker";
const client = new EchoServiceClient("http://localhost:8080", null);
const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {})
enableDevTools([client, ])
export const invoke = createInvoker(client).invoke;
