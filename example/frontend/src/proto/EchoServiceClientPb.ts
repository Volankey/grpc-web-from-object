import * as grpcWeb from 'grpc-web'

import echo_pb from './echo_pb';


export class EchoServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoEcho = new grpcWeb.MethodDescriptor(
    '/grpc.gateway.testing.EchoService/Echo',
    grpcWeb.MethodType.UNARY,
    echo_pb.EchoRequest,
    echo_pb.EchoResponse,
    (request: echo_pb.EchoRequest) => {
      return request.serializeBinary();
    },
    echo_pb.EchoResponse.deserializeBinary
  );

  echo(
    request: echo_pb.EchoRequest,
    metadata: grpcWeb.Metadata | null): Promise<echo_pb.EchoResponse>;

  echo(
    request: echo_pb.EchoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: echo_pb.EchoResponse) => void): grpcWeb.ClientReadableStream<echo_pb.EchoResponse>;

  echo(
    request: echo_pb.EchoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: echo_pb.EchoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc.gateway.testing.EchoService/Echo',
        request,
        metadata || {},
        this.methodInfoEcho,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc.gateway.testing.EchoService/Echo',
    request,
    metadata || {},
    this.methodInfoEcho);
  }

  methodInfoEchoAbort = new grpcWeb.MethodDescriptor(
    '/grpc.gateway.testing.EchoService/EchoAbort',
    grpcWeb.MethodType.UNARY,
    echo_pb.EchoRequest,
    echo_pb.EchoResponse,
    (request: echo_pb.EchoRequest) => {
      return request.serializeBinary();
    },
    echo_pb.EchoResponse.deserializeBinary
  );

  echoAbort(
    request: echo_pb.EchoRequest,
    metadata: grpcWeb.Metadata | null): Promise<echo_pb.EchoResponse>;

  echoAbort(
    request: echo_pb.EchoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: echo_pb.EchoResponse) => void): grpcWeb.ClientReadableStream<echo_pb.EchoResponse>;

  echoAbort(
    request: echo_pb.EchoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: echo_pb.EchoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc.gateway.testing.EchoService/EchoAbort',
        request,
        metadata || {},
        this.methodInfoEchoAbort,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc.gateway.testing.EchoService/EchoAbort',
    request,
    metadata || {},
    this.methodInfoEchoAbort);
  }

  methodInfoNoOp = new grpcWeb.MethodDescriptor(
    '/grpc.gateway.testing.EchoService/NoOp',
    grpcWeb.MethodType.UNARY,
    echo_pb.Empty,
    echo_pb.Empty,
    (request: echo_pb.Empty) => {
      return request.serializeBinary();
    },
    echo_pb.Empty.deserializeBinary
  );

  noOp(
    request: echo_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<echo_pb.Empty>;

  noOp(
    request: echo_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: echo_pb.Empty) => void): grpcWeb.ClientReadableStream<echo_pb.Empty>;

  noOp(
    request: echo_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: echo_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc.gateway.testing.EchoService/NoOp',
        request,
        metadata || {},
        this.methodInfoNoOp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc.gateway.testing.EchoService/NoOp',
    request,
    metadata || {},
    this.methodInfoNoOp);
  }

  methodInfoServerStreamingEcho = new grpcWeb.MethodDescriptor(
    '/grpc.gateway.testing.EchoService/ServerStreamingEcho',
    grpcWeb.MethodType.SERVER_STREAMING,
    echo_pb.ServerStreamingEchoRequest,
    echo_pb.ServerStreamingEchoResponse,
    (request: echo_pb.ServerStreamingEchoRequest) => {
      return request.serializeBinary();
    },
    echo_pb.ServerStreamingEchoResponse.deserializeBinary
  );

  serverStreamingEcho(
    request: echo_pb.ServerStreamingEchoRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/grpc.gateway.testing.EchoService/ServerStreamingEcho',
      request,
      metadata || {},
      this.methodInfoServerStreamingEcho);
  }

  methodInfoServerStreamingEchoAbort = new grpcWeb.MethodDescriptor(
    '/grpc.gateway.testing.EchoService/ServerStreamingEchoAbort',
    grpcWeb.MethodType.SERVER_STREAMING,
    echo_pb.ServerStreamingEchoRequest,
    echo_pb.ServerStreamingEchoResponse,
    (request: echo_pb.ServerStreamingEchoRequest) => {
      return request.serializeBinary();
    },
    echo_pb.ServerStreamingEchoResponse.deserializeBinary
  );

  serverStreamingEchoAbort(
    request: echo_pb.ServerStreamingEchoRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/grpc.gateway.testing.EchoService/ServerStreamingEchoAbort',
      request,
      metadata || {},
      this.methodInfoServerStreamingEchoAbort);
  }

}

