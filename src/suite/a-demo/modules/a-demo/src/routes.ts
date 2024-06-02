import Counter2 from './page/counter2/index.vue';
import Counter from './page/counter/index.vue';
import { IModuleRoute } from 'zova-module-a-router';

export const routes: IModuleRoute[] = [
  { path: 'counter', component: Counter },
  { path: 'counter2', component: Counter2 },
];
