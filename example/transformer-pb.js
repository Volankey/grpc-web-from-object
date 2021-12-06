const $ = require("gogocode");
const fs = require("fs");

const code = fs.readFileSync("./proto/echo_pb.js", "utf-8");

const AST = $(code);
// 注意 setWrapperField,setRepeatedWrapperField,setOneofWrapperField 是嵌套的标志
// TODO: setOneofWrapperField
const res = AST.find(
  `$_$1 = function(value) {
    return jspb.Message.setWrapperField(this, $_$2, value);
   };`
)
  .each((item) => {
    const methodName = item.match[1][0].value;

    const tokens = item.node.loc.tokens;
    const currentStartTokenNum = item.node.loc.start.token;
    const preToken = tokens[currentStartTokenNum - 1];
    if (preToken && preToken.type === "CommentBlock") {
      // @param {?proto.helloworld.Student|undefined} value
      const setMethodValueType = preToken.value.match(
        /@param {\?(.*)\|undefined} value/
      )?.[1];
      if (setMethodValueType) {
        // console.debug(methodName,setMethodValueType)
        item.after(`
            ${methodName}.getValueType = function() {
              return ${setMethodValueType};
            }
              `);
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
    const methodName = item.match[1][0].value;

    const tokens = item.node.loc.tokens;
    const currentStartTokenNum = item.node.loc.start.token;
    const preToken = tokens[currentStartTokenNum - 1];
    if (preToken && preToken.type === "CommentBlock") {
      // @param {?proto.helloworld.Student|undefined} value
      const setMethodValueType = preToken.value.match(
        /@param \{\!Array\<\!(.*)\>\} value/
      )?.[1];
      if (setMethodValueType) {
        // console.debug(methodName,setMethodValueType)
        item.after(`
            ${methodName}.getValueType = function() {
              return ${setMethodValueType};
            }
              `);
      }
    }
  })
  .root()
  .generate();
fs.writeFileSync("./proto/echo_pb.js", res, "utf-8");
