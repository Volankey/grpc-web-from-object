const fs = require('fs');

function clientCompatibleGrpcWeb(filePath) {
  let code = fs.readFileSync(filePath, 'utf-8');
  code = code.replace(
    `import * as grpcWeb from 'grpc-web';`,
    `import * as _grpcWeb from 'grpc-web';`,
  );
  code += `
  // fix getRequestMessageCtor is not expose grpc-web 1.4.x
  // ref:https://github.com/grpc/grpc-web/releases/tag/1.4.0
  var grpcWeb = Object.create(_grpcWeb);
  const oldMethodDescriptor = grpcWeb.MethodDescriptor;
  Object.defineProperty(grpcWeb, 'MethodDescriptor', {
    value: function(...args){
      this.reqMessageCtor = args[2]
      this.__proto__.__proto__ = oldMethodDescriptor.prototype;
      return oldMethodDescriptor.apply(this,args);
    }
  })
  Object.defineProperty(grpcWeb.MethodDescriptor.prototype, 'getRequestMessageCtor', {
    value: function() {
      return this.reqMessageCtor;
    }
  })
  `;
  fs.writeFileSync(filePath, code);
}
module.exports = { clientCompatibleGrpcWeb };
