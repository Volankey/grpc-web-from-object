export type Executor = (cancel?: (...args: any[]) => unknown) => void;

export class CancelToken {
  executor?: Executor;
  static source() {
    const data = {
      token: new CancelToken(),
      cancel() {
        data.token?.executor?.();
      },
    };
    return data;
  }

  constructor(executor?: Executor) {
    if (executor) {
      this.executor = executor;
    }
  }
}
