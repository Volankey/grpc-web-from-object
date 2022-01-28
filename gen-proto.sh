
name="echo"

protoc --proto_path=./ -I./ -I. --js_out=import_style=commonjs:"./example/src/proto" --grpc-web_out=import_style=typescript,mode=grpcwebtext:"./example/src/proto" "./${name}.proto"
node ./value-type-transfer/index.js ./example/src/proto/echo_pb.js

# just for vite, if you use webpack please remove it
node ./value-type-transfer/cjs2esm.js ./example/src/proto/echo_pb.js

node ./value-type-transfer/grpc-web-client-transform.js ./example/src/proto/EchoServiceClientPb.ts

