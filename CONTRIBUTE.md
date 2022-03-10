### Clone

```shell
git clone git@github.com:Volankey/grpc-web-from-object.git
```

### Install

```shell
pnpm install
```

### Start Backend Server

```
cd example/backend/echo/node-server
node server.js
```

### Start Envoy

```
cd example/backend/docker/envoy
sh run.sh
```

### Generate protobuf js and grpc-web

```
cd example/frontend
pnpm gen-proto
```

### Build Packages & Start frontend

```
pnpm dev:package
pnpm dev:example
```

### open browser see the result

http://localhost:3000/
