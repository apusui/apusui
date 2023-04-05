import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

declare global {
  interface HTMLElementTagNameMap {
    'wc-icon': Icon;
  }
}

@customElement('wc-icon')
export class Icon extends LitElement {
  protected render (): unknown {
    return html`
      <span class='material-icons'>
        <slot></slot>
      </span>
    `;
  }
}
