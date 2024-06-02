import { BeanRenderBase, Local } from 'zova';
import type { ControllerPageCounter } from './controller.js';
import { ScopeModule } from '../../resource/this.js';

export interface RenderPageCounter extends ControllerPageCounter {}

@Local()
export class RenderPageCounter extends BeanRenderBase<ScopeModule> {
  render() {
    return (
      <div class="text-center" style="font-size: 3vh">
        <div>count: {this.count}</div>
        <button onClick={() => this.inrement()}>Inrement</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}
