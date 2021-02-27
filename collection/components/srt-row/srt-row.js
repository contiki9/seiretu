import { Component, h, Element, Prop, Host } from '@stencil/core';
export class SrtRow {
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
    return (h(Host, null,
      h("div", { class: "row", "data-justifyContent": this.justify, "data-alignItems": this.align, "data-alignContent": this.alignContent, "data-nowrap": this.nowrap, "data-column": this.column },
        h("slot", null))));
  }
  static get is() { return "srt-row"; }
  static get originalStyleUrls() { return {
    "$": ["srt-row.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["srt-row.css"]
  }; }
  static get properties() { return {
    "justify": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'stretch' | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'",
        "resolved": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "justify",
      "reflect": false
    },
    "alignContent": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'stretch' | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'",
        "resolved": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"start\" | \"stretch\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "align-content",
      "reflect": false
    },
    "align": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'stretch' | 'start' | 'center' | 'end'",
        "resolved": "\"center\" | \"end\" | \"start\" | \"stretch\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "align",
      "reflect": false
    },
    "margin": {
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
      "attribute": "margin",
      "reflect": false
    },
    "nowrap": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "nowrap",
      "reflect": false
    },
    "column": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "column",
      "reflect": false
    }
  }; }
  static get elementRef() { return "Host"; }
}
