import { EchoServiceClient } from "../proto/EchoServiceClientPb";
import { createInvoker } from "./createGrpcWebInvoker";
const client = new EchoServiceClient("http://localhost:8080", null);

export const invoke = createInvoker(client).invoke;
