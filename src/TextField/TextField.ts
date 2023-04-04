import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

declare global {
  interface HTMLElementTagNameMap {
    'wc-text-field': TextField;
  }
}

@customElement('wc-text-field')
export class TextField extends LitElement {
  protected render (): unknown {
    return html`
      <p>I'm Text Field component!</p>
    `
  }
}
