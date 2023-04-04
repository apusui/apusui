import { CSSResultGroup, LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import '../assets/styles.css'
import { generateUniqueKey, getColor } from '../utils';

declare global {
  interface HTMLElementTagNameMap {
    'wc-text-field-outlined': TextFieldOutlined;
  }
}

@customElement('wc-text-field-outlined')
export class TextFieldOutlined extends LitElement {
  static styles?: CSSResultGroup | undefined = css`
    :host {
      --text-field-border-color: var(--grey-lighten-1);
      --text-field-label-color: var(--grey-darken-1);
      --text-field-message-color: var(--grey-darken-1);
      --text-field-caret-color: var(--blue-darken-2);

      --text-field-focus-border-color: var(--blue-darken-2);
      --text-field-focus-label-color: var(--blue-darken-2);
    }

    .text-field {
      height: 80px;
    }

    .text-field__wrapper {
      height: 100%;
    }

    .text-field__content {
      position: relative;
      min-height: 56px;
      border: 1px solid var(--text-field-border-color);
      display: flex;
      align-items: center;
      border-radius: 5px;
      padding: 0px 10px;
    }

    .text-field__label {
      position: absolute;
      font-size: 16px;
      user-select: none;
      transition: all 0.2s;
      transform: translateY(-50%);
      color: var(--text-field-label-color);
      top: 50%;
    }

    .text-field__input {
      max-height: 32px;
      width: 100%;
      background: transparent;
      border-style: none;
      outline: none;
      font-size: 16px;
      caret-color: var(--text-field-caret-color);
      color: rgba(0,0,0,.87);
    }

    .text-field__input::placeholder {
      opacity: 0;
      transition: all 0.1s;
    }

    .text-field__input:focus::placeholder {
      opacity: 1;
    }

    .text-field__input:focus + .text-field__label {
      color: var(--text-field-focus-label-color);
    }

    .text-field__input:focus + .text-field__label,
    .text-field__input:not(:placeholder-shown) + .text-field__label {
      top: 0%;
      font-size: 12px;
      background-color: white;
      padding: 0px 3px;
    }

    .text-field__content:focus-within {
      border: 2px solid var(--text-field-focus-border-color);
    }

    .text-field__details {
      padding: 5px 10px;
    }

    .text-field__text {
      font-size: 12px;
      color: var(--text-field-message-color);
    }
  `

  @property({ type: String, reflect: true })
    label: string | null = null

  @property({ type: String, reflect: true })
    name: string | null = null

  @property({ type: String, reflect: true })
    hint: string | null = null

  @property({ type: String, reflect: true })
    placeholder: string | null = null

  @property({ type: String, reflect: true })
    color: string | null = 'blue-darken-2'

  @state()
    uniqueID: string = generateUniqueKey()

  protected render (): unknown {
    const color = getColor(this.color as any) || this.color

    this.style.setProperty('--text-field-focus-border-color', color)
    this.style.setProperty('--text-field-focus-label-color', color)
    this.style.setProperty('--text-field-caret-color', color)

    return html`
      <div class="text-field">
        <div class="text-field__wrapper">
          <!-- Main content -->
          <div class="text-field__content">
            <!-- Input -->
            <input
              type="text"
              id=${this.uniqueID}
              name=${this.name}
              placeholder=${this.placeholder || ' '}
              class="text-field__input"
            />
            <!-- Label -->
            <label for=${this.uniqueID} class="text-field__label">${this.label}</label>
          </div>

          <!-- Messages -->
          <div class="text-field__details">
            <span class="text-field__text" aria-label="Mensaje de error"
              >${this.hint}</span
            >
          </div>
        </div>
      </div>
    `
  }
}
