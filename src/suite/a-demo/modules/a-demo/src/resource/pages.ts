export * as NSControllerPageCounter2 from '../page/counter2/controller.js';
export * as NSControllerPageCounter from '../page/counter/controller.js';
import * as NSControllerPageCounter from '../page/counter/controller.js';
import * as NSControllerPageCounter2 from '../page/counter2/controller.js';
// import { TypePageParamsQuery } from 'zova';
import 'zova';
declare module 'zova' {
  export interface IPagePathRecord {
    '/a/demo/counter': NSControllerPageCounter.QueryInput;
    '/a/demo/counter2': NSControllerPageCounter2.QueryInput;
  }
  export interface IPageNameRecord {
    // 'a-demo:page-name': TypePageParamsQuery<NSControllerPagePageName.QueryInput, NSControllerPagePageName.ParamsInput>;
  }
}

export const pagePathSchemas = {
  '/a/demo/counter': {
    query: NSControllerPageCounter.QuerySchema,
  },
  '/a/demo/counter2': {
    query: NSControllerPageCounter2.QuerySchema,
  },
};

export const pageNameSchemas = {
  // 'a-demo:page-name': {
  //   params: NSControllerPagePageName.ParamsSchema,
  //   query: NSControllerPagePageName.QuerySchema,
  // },
};
