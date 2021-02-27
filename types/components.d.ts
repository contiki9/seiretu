/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface SrtRow {
        "align": 'stretch' | 'start' | 'center' | 'end';
        "alignContent": 'stretch' | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
        "column": boolean;
        "justify": 'stretch' | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
        "margin": string;
        "nowrap": boolean;
    }
    interface SrtSpace {
        "class": string;
        "display": 'block' | 'inline-block';
    }
}
declare global {
    interface HTMLSrtRowElement extends Components.SrtRow, HTMLStencilElement {
    }
    var HTMLSrtRowElement: {
        prototype: HTMLSrtRowElement;
        new (): HTMLSrtRowElement;
    };
    interface HTMLSrtSpaceElement extends Components.SrtSpace, HTMLStencilElement {
    }
    var HTMLSrtSpaceElement: {
        prototype: HTMLSrtSpaceElement;
        new (): HTMLSrtSpaceElement;
    };
    interface HTMLElementTagNameMap {
        "srt-row": HTMLSrtRowElement;
        "srt-space": HTMLSrtSpaceElement;
    }
}
declare namespace LocalJSX {
    interface SrtRow {
        "align"?: 'stretch' | 'start' | 'center' | 'end';
        "alignContent"?: 'stretch' | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
        "column"?: boolean;
        "justify"?: 'stretch' | 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
        "margin"?: string;
        "nowrap"?: boolean;
    }
    interface SrtSpace {
        "class"?: string;
        "display"?: 'block' | 'inline-block';
    }
    interface IntrinsicElements {
        "srt-row": SrtRow;
        "srt-space": SrtSpace;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "srt-row": LocalJSX.SrtRow & JSXBase.HTMLAttributes<HTMLSrtRowElement>;
            "srt-space": LocalJSX.SrtSpace & JSXBase.HTMLAttributes<HTMLSrtSpaceElement>;
        }
    }
}
