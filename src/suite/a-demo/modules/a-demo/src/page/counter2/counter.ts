import { BeanBase, Local } from 'zova';
import { ScopeModule } from '../../resource/this.js';

@Local()
export class Counter extends BeanBase<ScopeModule> {
  count: number = 0;

  inrement() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
