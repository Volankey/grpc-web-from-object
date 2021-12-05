
name="echo"
# rm -rf "./${name}"
# mkdir "./${name}"

protoc --proto_path=./ -I./ -I. --js_out=import_style=commonjs:"./proto" --grpc-web_out=import_style=typescript,mode=grpcwebtext:"./proto" "./${name}.proto"
