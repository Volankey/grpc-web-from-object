/* eslint @typescript-eslint/no-var-requires: "off" */
const $ = require('gogocode')
const fs = require('fs')

// const filePath = process.argv[2]
const filePath = '/home/tusimple/Documents/wksp/grpc-web-protojs-transformer/example/src/proto/echo_pb.js'

console.log('handle file:', filePath, '...')

const code = fs.readFileSync(filePath, 'utf-8')

const AST = $(code)
// 注意 setWrapperField,setRepeatedWrapperField,setOneofWrapperField 是嵌套的标志
// TODO: setOneofWrapperField
const res = AST.find(
  `$_$1 = function(value) {
    return jspb.Message.setWrapperField(this, $_$2, value);
   };`
)
  .each((item) => {
    const methodName = item.match[1][0].value

    const tokens = item.node.loc.tokens
    const currentStartTokenNum = item.node.loc.start.token
    const preToken = tokens[currentStartTokenNum - 1]
    if (preToken && preToken.type === 'CommentBlock') {
      // @param {?proto.helloworld.Student|undefined} value
      const setMethodValueType = preToken.value.match(
        /@param {\?(.*)\|undefined} value/
      )?.[1]
      if (setMethodValueType) {
        // console.debug(methodName,setMethodValueType)
        item.after(`
            ${methodName}.getValueType = function() {
              return ${setMethodValueType};
            }
              `)
      }
    }
  })
  .root()
  .find(
    `$_$1 = function(value) {
    return jspb.Message.setRepeatedWrapperField(this, $_$2, value);
   };`
  )
  .each((item) => {
    const methodName = item.match[1][0].value

    const tokens = item.node.loc.tokens
    const currentStartTokenNum = item.node.loc.start.token
    const preToken = tokens[currentStartTokenNum - 1]
    if (preToken && preToken.type === 'CommentBlock') {
      // @param {?proto.helloworld.Student|undefined} value
      const setMethodValueType = preToken.value.match(
        /@param \{!Array<!(.*)>\} value/
      )?.[1]
      if (setMethodValueType) {
        // console.debug(methodName,setMethodValueType)
        item.after(`
            ${methodName}.getValueType = function() {
              return ${setMethodValueType};
            }
              `)
      }
    }
  })
  .root()
  .find(
  `$_$1.prototype.$_$2 = function ($_$3) {
    return (
      jspb.Message.getMapField(this, $_$4, opt_noLazyCreate, $_$5)
    );
  };`)
  .each((item)=>{
   const getMethodName = item.match[2][0].value // getXXXMap
   const setMethodName = getMethodName.replace('get','set')
    const protoType = item.match[1][0].value // eg: 'proto.grpc.gateway.testing.EchoRequest'
    const setMapValueFunctionContent = `
    /* @param [[key,value]] */
    ${protoType}.prototype.${setMethodName} = function(k,v) {
      this.${getMethodName}().set(k,v)
    }
    `
    const setMapValueType = `
    /* generate by Volankey */
    ${protoType}.prototype.${setMethodName}.getValueType = function() {
      return this.${getMethodName}()
    }
    `
    item.after(setMapValueType).after(setMapValueFunctionContent)

  })
  .root()
  .find(
    `$_$1 = function(value) {
    return jspb.Message.setOneofWrapperField(this, $_$2, $_$3, value);
   };`
  )
  .each((item) => {
    const methodName = item.match[1][0].value

    const tokens = item.node.loc.tokens
    const currentStartTokenNum = item.node.loc.start.token
    const preToken = tokens[currentStartTokenNum - 1]
    if (preToken && preToken.type === 'CommentBlock') {
      // @param {?proto.grpc.gateway.testing.Score|undefined} value
      const setMethodValueType = preToken.value.match(
        /@param \{\?(.+)\|undefined} value/
      )?.[1]
      if (setMethodValueType) {
        // console.debug(methodName,setMethodValueType)
        item.after(`
            ${methodName}.getValueType = function() {
              return ${setMethodValueType};
            }
              `)
      }
    }
  }).root()
  .generate()
fs.writeFileSync(filePath, res, 'utf-8')
