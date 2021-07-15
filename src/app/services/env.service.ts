/* eslint-disable @typescript-eslint/no-explicit-any */
export class EveService {
  getEnv(key: string): unknown {
    const browserWindow = window || {};
    const browserWindowEnv = (browserWindow as { [key: string]: any })['__env'] || {};
    return browserWindowEnv[key];
  }
}
