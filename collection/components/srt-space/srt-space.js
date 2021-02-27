import { Component, Host, h, Prop } from '@stencil/core';
export class SrtSpace {
  constructor() {
    this.display = 'block';
  }
  render() {
    return (h(Host, null,
      h("div", { class: this.class, "data-display": this.display },
        h("slot", null))));
  }
  static get is() { return "srt-space"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["srt-space.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["srt-space.css"]
  }; }
  static get properties() { return {
    "class": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "class",
      "reflect": false
    },
    "display": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'block' | 'inline-block'",
        "resolved": "\"block\" | \"inline-block\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "display",
      "reflect": false,
      "defaultValue": "'block'"
    }
  }; }
}
