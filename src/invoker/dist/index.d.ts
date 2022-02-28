import { RpcError } from 'grpc-web';

declare type Executor = (cancel?: (...args: any[]) => unknown) => void;
declare class CancelToken {
    executor?: Executor;
    static source(): {
        token: CancelToken;
        cancel(): void;
    };
    constructor(executor?: Executor);
}

declare type F = (...args: any) => any;
declare type InvokeOptions = {
    mock?: boolean;
    cancelToken?: CancelToken;
};
declare type InvokerOptions = {
    mock?: boolean;
    mockServer?: string;
};
interface ReplyCom {
    toObject: (...args: any) => any;
}
declare type PromiseCallReturnType<T extends F> = Parameters<Parameters<T>[2]>[1];
declare type GrpcMessageToObject<T> = T extends ReplyCom ? T['toObject'] extends F ? ReturnType<T['toObject']> : never : never;
interface Config {
    globalMeta?: Record<string, string>;
    errorHandler?: (e: RpcError) => void;
}
declare function createInvoker<C>(client: C, initConfig?: Config, invokerOptions?: InvokerOptions): {
    invoke: <IM extends { [K in keyof C]: C[K] extends Function ? K extends `methodInfo${infer P}` ? never : K : never; }[keyof C]>(method: IM extends string ? IM : never, data: Partial<{ [index in keyof ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>]: ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index] extends Record<string, any> ? Partial<{ [index_1 in keyof ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index]]: ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1] extends Record<string, any> ? Partial<{ [index_2 in keyof ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1]]: ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2] extends Record<string, any> ? Partial<{ [index_3 in keyof ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2]]: ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3] extends Record<string, any> ? Partial<{ [index_4 in keyof ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3]]: ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4] extends Record<string, any> ? Partial<{ [index_5 in keyof ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4]]: ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5] extends Record<string, any> ? Partial<{ [index_6 in keyof ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5]]: ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6] extends Record<string, any> ? Partial<{ [index_7 in keyof ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6]]: ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6][index_7] extends Record<string, any> ? Partial<{ [index_8 in keyof ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6][index_7]]: ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6][index_7][index_8] extends Record<string, any> ? Partial<{ [index_9 in keyof ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6][index_7][index_8]]: ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6][index_7][index_8][index_9] extends Record<string, any> ? Partial<{ [index_10 in keyof ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6][index_7][index_8][index_9]]: ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6][index_7][index_8][index_9][index_10] extends Record<string, any> ? Partial<any> : Partial<ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6][index_7][index_8][index_9][index_10]>; }> : Partial<ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6][index_7][index_8][index_9]>; }> : Partial<ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6][index_7][index_8]>; }> : Partial<ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6][index_7]>; }> : Partial<ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5][index_6]>; }> : Partial<ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4][index_5]>; }> : Partial<ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3][index_4]>; }> : Partial<ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2][index_3]>; }> : Partial<ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1][index_2]>; }> : Partial<ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index][index_1]>; }> : Partial<ReturnType<C[IM] extends F ? Parameters<C[IM]>[0]["toObject"] : never>[index]>; }>, metadata?: Config['globalMeta'], options?: InvokeOptions | undefined) => Promise<GrpcMessageToObject<PromiseCallReturnType<C[IM]>>>;
    setGlobalMetaData: (key: string, value: string) => void;
    config: Config;
};

export { createInvoker };
