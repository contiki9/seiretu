import { r as registerInstance, h, H as Host, g as getElement } from './index-d332063f.js';

const srtRowCss = ".row{display:flex;flex-direction:row;flex-wrap:wrap;width:100%}.row[data-column]{flex-direction:column}.row[data-nowrap]{flex-wrap:nowrap}.row[data-justifyContent=start]{justify-content:flex-start}.row[data-justifyContent=center]{justify-content:center}.row[data-justifyContent=end]{justify-content:flex-end}.row[data-justifyContent=space-between]{justify-content:space-between}.row[data-justifyContent=space-around]{justify-content:space-around}.row[data-justifyContent=space-evenly]{justify-content:space-evenly}.row[data-justifyContent=stretch]{justify-content:stretch}.row[data-alignItems=stretch]{align-items:stretch}.row[data-alignItems=start]{align-items:flex-start}.row[data-alignItems=center]{align-items:center}.row[data-alignItems=end]{align-items:flex-end}.row[data-alignContent=start]{align-content:flex-start}.row[data-alignContent=center]{align-content:center}.row[data-alignContent=end]{align-content:flex-end}.row[data-alignContent=space-between]{align-content:space-between}.row[data-alignContent=space-around]{align-content:space-around}.row[data-alignContent=space-evenly]{align-content:space-evenly}.row[data-alignContent=stretch]{align-content:stretch}.row .srt-spacer{flex-grow:1}";

const SrtRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    const slotted = this.Host.querySelectorAll('.row > *');
    const lastSlotted = slotted[slotted.length - 1];
    if (this.column) {
      slotted.forEach((col) => {
        col.style.marginBottom = this.margin;
      });
      lastSlotted.style.marginBottom = '';
    }
    else {
      slotted.forEach((col) => {
        col.style.marginRight = this.margin;
      });
      lastSlotted.style.marginRight = '';
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "row", "data-justifyContent": this.justify, "data-alignItems": this.align, "data-alignContent": this.alignContent, "data-nowrap": this.nowrap, "data-column": this.column }, h("slot", null))));
  }
  get Host() { return getElement(this); }
};
SrtRow.style = srtRowCss;

export { SrtRow as srt_row };
