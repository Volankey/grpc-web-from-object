import { EchoServiceClient } from '../proto/EchoServiceClientPb';
import { isObject } from 'lodash-es';
import proto from '../proto/echo_pb';
// eslint-disable-next-line semi

function firstToUpperCase(str: string) {
  return str.replace(/^\S/, (s) => s.toUpperCase());
}

class ReplyCom {
  toObject: ((...args: any) => any) | undefined;
}

type F = (...args: any) => any;
type UnPromise<T extends Promise<any>> = T extends Promise<infer U>
  ? U extends ReplyCom
    ? U
    : never
  : never;

function getMethodInfo(client: unknown, methodName: string) {
  return (client as unknown as any)[
    'methodInfo' + methodName.replace(/^\S/, (s) => s.toUpperCase())
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
          if (reqTypeInstance[setMethodName]['getValueType']) {
            // @ts-ignore
            const  TmpReqType = reqTypeInstance[setMethodName]['getValueType']()

            item = setRequestBody(TmpReqType, item as any);
          }
          return item
        });
      } else {
        // @ts-ignore
        const  TmpReqType = reqTypeInstance[setMethodName]['getValueType']()
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
    data: ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]['toObject'] : never>
  ): Promise<
      UnPromise<ReturnType<C[IM] extends ((req:any,meta:any)=>Promise<any>) ? C[IM] : never>>['toObject']
  > {
    const methodInfo = getMethodInfo(client, method);
    const ReqType = methodInfo.getRequestMessageCtor();
    const requestBody = setRequestBody(ReqType, data);
    // HELP: how remove any
    return (client as unknown as any)
      [method as IM](requestBody).then((res:any)=>res.toObject()).catch((e:any)=>Promise.reject(e))
  };
}

const client = new EchoServiceClient('http://localhost:8080', null);
export const invoke = createInvoker(client);

// TODO: partial 递归