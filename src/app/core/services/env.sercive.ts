/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  // The values that are defined here are the default values that can be overridden by env.js
  Test = true;
}

const EnvServiceFactory = (): EnvService => {
  const env = new EnvService();
  const browserWindow = window || {};
  const browserWindowEnv = (browserWindow as { [key: string]: any })['__env'] || {};
  console.log(browserWindowEnv);

  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty.call(key)) {
      (env as { [key: string]: any })[key] = (window as { [key: string]: any })['__env'][key];
    }
  }
  return env;
};

export const EnvServiceProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: [],
};
