import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'srt-space',
  styleUrl: 'srt-space.scss',
  shadow: true,
})
export class SrtSpace {
  @Prop() class: string;

  @Prop() display: 'block' | 'inline-block' = 'block';
  render() {
    return (
      <Host>
        <div class={this.class} data-display={this.display}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
