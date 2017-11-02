import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'vt-echo-stencil',
  styleUrl: 'vt-echo-stencil.scss',

})
export class VirtuaTrainingEchoStencil {

  @Prop() message: string;

  render() {
    return (
      <span>
        {this.message}
      </span>
    );
  }
}
