import { EchoServiceClient } from "../proto/EchoServiceClientPb";
import { isObject } from "lodash-es";

type PromiseCallReturnType<T extends F> = Parameters<Parameters<T>[2]>[1];
type GrpcMessageToObject<T> = T extends ReplyCom
  ? T["toObject"] extends F
    ? ReturnType<T["toObject"]>
    : never
  : never;

function firstToUpperCase(str: string) {
  return str.replace(/^\S/, (s) => s.toUpperCase());
}

interface ReplyCom {
  toObject: (...args: any) => any;
}

type F = (...args: any) => any;
type UnPromise<T extends Promise<any>> = T extends Promise<infer U>
  ? U extends ReplyCom
    ? U
    : never
  : never;

function getMethodInfo(client: unknown, methodName: string) {
  return (client as unknown as any)[
    "methodInfo" + methodName.replace(/^\S/, (s) => s.toUpperCase())
  ];
}
function setRequestBody(
  ReqType: new () => any,
  data: { [s: string]: unknown } | ArrayLike<unknown>
) {
  const reqTypeInstance = new ReqType();
  Object.entries(data).forEach(([key, value]) => {
    const varsNameUpper = firstToUpperCase(key);
    const setMethodName = `set${varsNameUpper}`;
    const setMethodCall = reqTypeInstance[setMethodName].bind(reqTypeInstance);
    let finalVal = null;
    if (setMethodCall) {
      // 递归处理
      if (!isObject(value)) {
        finalVal = value;
      } else if (Array.isArray(value)) {
        finalVal = value.map((item) => {
          if (reqTypeInstance[setMethodName]["getValueType"]) {
            // @ts-ignore
            const TmpReqType = reqTypeInstance[setMethodName]["getValueType"]();

            item = setRequestBody(TmpReqType, item as any);
          }
          return item;
        });
        // TODO: 处理 oneof 类型
      } else {
        // @ts-ignore
        const TmpReqType = reqTypeInstance[setMethodName]["getValueType"]();
        finalVal = setRequestBody(TmpReqType, value as any);
      }
      setMethodCall(finalVal);
    }
  });
  return reqTypeInstance;
}

export function createInvoker<C>(client: C) {
  type M = {
    [K in keyof C]: C[K] extends Function
      ? K extends `methodInfo${infer P}`
        ? never
        : K
      : never;
  }[keyof C];
  return function invoke<IM extends M>(
    method: IM extends string ? IM : never,
    data: ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>
  ): Promise<GrpcMessageToObject<PromiseCallReturnType<C[IM]>>> {
    const methodInfo = getMethodInfo(client, method);
    const ReqType = methodInfo.getRequestMessageCtor();
    const requestBody = setRequestBody(ReqType, data);
    // HELP: how remove any
    return (client as unknown as any)
      [method as IM](requestBody)
      .then((res: any) => res.toObject())
      .catch((e: any) => Promise.reject(e));
  };
}

const client = new EchoServiceClient("http://localhost:8080", null);
export const invoke = createInvoker(client);
