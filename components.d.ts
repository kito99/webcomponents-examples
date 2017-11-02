/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';

import { VirtuaTrainingEchoStencil as VtEchoStencil } from './vt-echo-stencil';

interface HTMLVtEchoStencilElement extends VtEchoStencil, HTMLElement {
}
declare var HTMLVtEchoStencilElement: {
  prototype: HTMLVtEchoStencilElement;
  new (): HTMLVtEchoStencilElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "vt-echo-stencil": HTMLVtEchoStencilElement;
  }
  interface ElementTagNameMap {
      "vt-echo-stencil": HTMLVtEchoStencilElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "vt-echo-stencil": JSXElements.VtEchoStencilAttributes;
      }
  }
  namespace JSXElements {
      export interface VtEchoStencilAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          message?: string
      }
  }
}
