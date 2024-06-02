import { BeanRenderBase, Local } from 'zova';
import type { ControllerPageCounter2 } from './controller.js';
import { ScopeModule } from '../../resource/this.js';

export interface RenderPageCounter2 extends ControllerPageCounter2 {}

@Local()
export class RenderPageCounter2 extends BeanRenderBase<ScopeModule> {
  render() {
    return (
      <div class="text-center" style="font-size: 5vh">
        <div>count: {this.$$counter.count}</div>
        <button onClick={() => this.$$counter.inrement()}>Inrement</button>
        <button onClick={() => this.$$counter.decrement()}>Decrement</button>
      </div>
    );
  }
}
