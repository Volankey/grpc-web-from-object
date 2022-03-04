var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// createGrpcWebInvoker.ts
import { isObject, merge } from "lodash-es";
import { Map } from "google-protobuf";
function firstToUpperCase(str) {
  return str.replace(/^\S/, (s) => s.toUpperCase());
}
function getMethodInfo(client, methodName) {
  return client["methodInfo" + methodName.replace(/^\S/, (s) => s.toUpperCase())];
}
function setRequestBody(ReqType, data) {
  const reqTypeInstance = new ReqType();
  Object.entries(data).forEach(([key, value]) => {
    var _a;
    const varsNameUpper = firstToUpperCase(key);
    const setMethodName = `set${varsNameUpper}`;
    const setMethodCall = reqTypeInstance[setMethodName].bind(reqTypeInstance);
    let finalVal = null;
    const valueTypeCtor = (_a = reqTypeInstance[setMethodName].getValueType) == null ? void 0 : _a.call(reqTypeInstance);
    if (setMethodCall) {
      if (!isObject(value)) {
        finalVal = value;
      } else if (valueTypeCtor instanceof Map) {
        const mapValueCtor = valueTypeCtor.valueCtor_;
        const [k, v] = value[0];
        if (mapValueCtor) {
          setMethodCall(k, setRequestBody(mapValueCtor, v));
        } else {
          setMethodCall(k, v);
        }
        return reqTypeInstance;
      } else if (Array.isArray(value)) {
        finalVal = value.map((item) => {
          if (valueTypeCtor) {
            item = setRequestBody(valueTypeCtor, item);
          }
          return item;
        });
      } else {
        finalVal = setRequestBody(valueTypeCtor, value);
      }
      setMethodCall(finalVal);
    }
  });
  return reqTypeInstance;
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function setRestfulRequestBody(data) {
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      data[key.replace(/List$/, "")] = value;
      setRestfulRequestBody(value);
      delete data[key];
    } else if (typeof value === "object" && value !== null) {
      setRestfulRequestBody(value);
    }
  });
  return data;
}
function setRestfulResponseBody(data) {
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      data[key + "List"] = value;
      setRestfulResponseBody(value);
      delete data[key];
    } else if (typeof value === "object" && value !== null) {
      setRestfulResponseBody(value);
    }
  });
  return data;
}
function createInvoker(client, initConfig, invokerOptions) {
  const config = __spreadValues({
    globalMeta: {},
    errorHandler: (e) => {
      console.error(e.method, e);
    }
  }, initConfig);
  const invoke = function invoke2(method, data, metadata, options) {
    const methodInfo = getMethodInfo(client, method);
    const ReqType = methodInfo.getRequestMessageCtor();
    const requestBody = setRequestBody(ReqType, data);
    console.log("\u{1F680} ~ file: createGrpcWebInvoker.ts ~ line 152 ~ requestBody", requestBody);
    const tmpMetadata = merge(metadata, config.globalMeta);
    let reqInstance = null;
    if ((options == null ? void 0 : options.mock) || (invokerOptions == null ? void 0 : invokerOptions.mock)) {
      if ((invokerOptions == null ? void 0 : invokerOptions.mockServer) === void 0) {
        throw new Error("Mock Server is undefined");
      }
      return fetch(invokerOptions.mockServer + "/" + capitalizeFirstLetter(method), {
        headers: __spreadValues({
          "Content-Type": "application/json"
        }, tmpMetadata),
        method: "POST",
        body: JSON.stringify(setRestfulRequestBody(data))
      }).then((resp) => resp.json()).then((respJson) => setRestfulResponseBody(respJson));
    }
    return new Promise((resolve, reject) => {
      reqInstance = client[method](requestBody, tmpMetadata, (err, resp) => {
        var _a;
        if (err) {
          (_a = config == null ? void 0 : config.errorHandler) == null ? void 0 : _a.call(config, err);
          reject(err);
        } else {
          resolve(resp);
        }
      });
      if (options == null ? void 0 : options.cancelToken) {
        if (options == null ? void 0 : options.cancelToken.executor) {
          options == null ? void 0 : options.cancelToken.executor(reqInstance.abort);
        } else {
          options.cancelToken.executor = reqInstance.abort;
        }
      }
    }).then((res) => res.toObject()).catch((e) => {
      e.method = method;
      return Promise.reject(e);
    });
  };
  const setGlobalMetaData = (key, value) => {
    config.globalMeta[key] = value;
  };
  return {
    invoke,
    setGlobalMetaData,
    config
  };
}
export {
  createInvoker
};
