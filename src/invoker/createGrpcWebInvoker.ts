/* eslint no-unexpected-multiline: "off" */
import { isObject, merge } from "lodash-es";
import { RpcError } from "grpc-web";
import { Map } from "google-protobuf";
import { CancelToken } from "./CancelToken";

type F = (...args: any) => any;
type InvokeOptions = {
  mock?: boolean;
  cancelToken?: CancelToken;
};
type InvokerOptions = {
  mock?: boolean;
  mockServer?: string;
};

interface ReplyCom {
  toObject: (...args: any) => any;
}
type PromiseCallReturnType<T extends F> = Parameters<Parameters<T>[2]>[1];
type GrpcMessageToObject<T> = T extends ReplyCom
  ? T["toObject"] extends F
    ? ReturnType<T["toObject"]>
    : never
  : never;

function firstToUpperCase(str: string) {
  return str.replace(/^\S/, (s) => s.toUpperCase());
}

function getMethodInfo(client: unknown, methodName: string) {
  return (client as unknown as any)[
    "methodInfo" + methodName.replace(/^\S/, (s) => s.toUpperCase())
  ];
}
type DeepPartial<T> = Partial<{
  [index in keyof T]: T[index] extends Record<string, any>
    ? DeepPartial<T[index]>
    : Partial<T[index]>;
}>;
function setRequestBody(
  ReqType: new () => any,
  data: { [s: string]: unknown } | ArrayLike<unknown>
) {
  const reqTypeInstance = new ReqType();
  Object.entries(data).forEach(([key, value]) => {
    const varsNameUpper = firstToUpperCase(key);
    const setMethodName = `set${varsNameUpper}`;
    if (!reqTypeInstance[setMethodName]) {
      return;
    }
    const setMethodCall = reqTypeInstance[setMethodName].bind(reqTypeInstance);
    let finalVal = null;
    const valueTypeCtor =
      reqTypeInstance[setMethodName].getValueType?.call(reqTypeInstance);
    if (setMethodCall) {
      // 递归处理
      if (!isObject(value)) {
        finalVal = value;
      } else if (valueTypeCtor instanceof Map) {
        // 处理MAP类型
        // @ts-ignore
        const mapValueCtor = valueTypeCtor.valueCtor_;
        const [k, v] = (value as [[any, any]])[0];
        // wrapperd field
        if (mapValueCtor) {
          setMethodCall(k, setRequestBody(mapValueCtor, v));
        } else {
          setMethodCall(k, v);
        }
        return reqTypeInstance;
      } else if (Array.isArray(value)) {
        finalVal = value.map((item) => {
          if (valueTypeCtor) {
            item = setRequestBody(valueTypeCtor, item as any);
          }
          return item;
        });
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        finalVal = setRequestBody(valueTypeCtor, value as any);
      }
      setMethodCall(finalVal);
    }
  });
  return reqTypeInstance;
}
interface Config {
  globalMeta?: Record<string, string>;
  errorHandler?: (e: RpcError) => void;
}
function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function setRestfulRequestBody(data: any) {
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
function setRestfulResponseBody(data: any) {
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
export function createInvoker<C>(
  client: C,
  initConfig?: Config,
  invokerOptions?: InvokerOptions
) {
  type M = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    [K in keyof C]: C[K] extends Function
      ? // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // eslint-disable-next-line no-unused-vars
        K extends `methodInfo${infer P}`
        ? never
        : K
      : never;
  }[keyof C];
  const config: Config = {
    globalMeta: {},
    errorHandler: (e: RpcError & { method?: string }) => {
      console.error(e.method, e);
    },
    ...initConfig,
  };
  const invoke = function invoke<IM extends M>(
    method: IM extends string ? IM : never,
    data: DeepPartial<
      ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>
    >,
    metadata?: Config["globalMeta"],
    options?: InvokeOptions
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  ): Promise<GrpcMessageToObject<PromiseCallReturnType<C[IM]>>> {
    const methodInfo = getMethodInfo(client, method);
    const ReqType = methodInfo.getRequestMessageCtor();
    const requestBody = setRequestBody(ReqType, data);
    console.log(
      "🚀 ~ file: createGrpcWebInvoker.ts ~ line 152 ~ requestBody",
      requestBody
    );
    const tmpMetadata = merge(metadata, config.globalMeta);
    let reqInstance: any = null;
    if (options?.mock || invokerOptions?.mock) {
      if (invokerOptions?.mockServer === undefined) {
        throw new Error("Mock Server is undefined");
      }
      return fetch(
        invokerOptions.mockServer + "/" + capitalizeFirstLetter(method),
        {
          headers: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            "Content-Type": "application/json",
            ...tmpMetadata,
          },
          method: "POST",
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          body: JSON.stringify(setRestfulRequestBody(data)),
        }
      )
        .then((resp) => resp.json())
        .then((respJson) => setRestfulResponseBody(respJson));
    }
    return new Promise((resolve, reject) => {
      // HELP: how remove any
      reqInstance = (client as unknown as any)[method as IM](
        requestBody,
        tmpMetadata,
        (
          err: RpcError,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          resp: GrpcMessageToObject<PromiseCallReturnType<C[IM]>>
        ) => {
          if (err) {
            config?.errorHandler?.(err);
            reject(err);
          } else {
            resolve(resp);
          }
        }
      );
      if (options?.cancelToken) {
        if (options?.cancelToken.executor) {
          options?.cancelToken.executor(reqInstance.abort);
        } else {
          options.cancelToken.executor = reqInstance.abort;
        }
      }
    })
      .then((res: any) => res.toObject())
      .catch((e: any) => {
        e.method = method;
        return Promise.reject(e);
      });
  };

  const setGlobalMetaData = (key: string, value: string) => {
    config.globalMeta![key] = value;
  };
  return {
    invoke,
    setGlobalMetaData,
    config,
  };
}
