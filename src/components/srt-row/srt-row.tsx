import { Component, h,Element,Prop, Host } from '@stencil/core';

@Component({
  tag: 'srt-row',
  styleUrl: 'srt-row.scss',
  shadow: false,
})
export class SrtRow {
  @Prop() justify:"stretch"|"start"| "center"| "end"|"space-between"| "space-around" | "space-evenly";
  @Prop() alignContent : "stretch"|"start"| "center"| "end"|"space-between"| "space-around" | "space-evenly";
  @Prop() align : "stretch"|"start"| "center"| "end";
  @Prop() space : string;
  @Prop() nowrap : boolean;
  @Prop() column : boolean;
  @Element() Host: HTMLDivElement;

  componentDidLoad() {
    const slotted:NodeListOf<HTMLDivElement> = this.Host.querySelectorAll('.row > *');
    const lastSlotted:HTMLDivElement = slotted[slotted.length - 1];
    if(this.column){
      slotted.forEach((col:HTMLDivElement) => {
        col.style.marginBottom = this.space
      });
      lastSlotted.style.marginBottom = ''
    }else{
      slotted.forEach((col:HTMLDivElement) => {
        col.style.marginRight = this.space
      });
      lastSlotted.style.marginRight = ''
    }
}

  render() {
    return(
    <Host>
      <div class="row"
      data-justifyContent={this.justify}
      data-alignItems={this.align}
      data-alignContent={this.alignContent}
      data-nowrap={this.nowrap}
      data-column={this.column}
      >
        <slot></slot>
      </div>
    </Host>
    )
  }
}
