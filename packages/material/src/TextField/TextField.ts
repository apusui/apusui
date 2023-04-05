import { CSSResultGroup, LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import '../assets/styles.css'

import { generateUniqueKey, getColor } from '../utils';

import '../Icon/Icon'

declare global {
  interface HTMLElementTagNameMap {
    'wc-text-field': TextField;
  }
}

export type Appearance = 'regular' | 'outlined' | 'filled'

@customElement('wc-text-field')
export class TextField extends LitElement {
  static styles?: CSSResultGroup | undefined = css`
    :host {
      --text-field-border-color: var(--grey-lighten-1);
      --text-field-label-color: var(--grey-darken-1);
      --text-field-message-color: var(--grey-darken-1);
      --text-field-caret-color: var(--blue-darken-2);

      --text-field-focus-border-color: var(--blue-darken-2);
      --text-field-focus-label-color: var(--blue-darken-2);
    }

    :host([appearance="outlined"]) .text-field {
      height: 80px;
    }

    :host([appearance="outlined"]) .text-field__wrapper {
      height: 100%;
    }

    :host([appearance="outlined"]) .text-field__content {
      position: relative;
      min-height: 56px;
      border: 1px solid var(--text-field-border-color);
      display: flex;
      align-items: center;
      border-radius: 5px;
      padding: 0px 10px;
    }

    :host([appearance="outlined"]) .text-field__label {
      position: absolute;
      font-size: 16px;
      user-select: none;
      transition: all 0.2s;
      transform: translateY(-50%);
      color: var(--text-field-label-color);
      top: 50%;
    }

    :host([appearance="outlined"]) .text-field__input {
      max-height: 32px;
      width: 100%;
      background: transparent;
      border-style: none;
      outline: none;
      font-size: 16px;
      caret-color: var(--text-field-caret-color);
      color: rgba(0, 0, 0, .87);
    }

    :host([appearance="outlined"]) .text-field__input::placeholder {
      opacity: 0;
      transition: all 0.1s;
    }

    :host([appearance="outlined"]) .text-field__input:focus::placeholder {
      opacity: 1;
    }

    :host([appearance="outlined"]) .text-field__input:focus + .text-field__label {
      color: var(--text-field-focus-label-color);
    }

    :host([appearance="outlined"]) .text-field__input:focus + .text-field__label,
    :host([appearance="outlined"]) .text-field__input:not(:placeholder-shown) + .text-field__label {
      top: 0%;
      font-size: 12px;
      background-color: white;
      padding: 0px 3px;
    }

    :host([appearance="outlined"]) .text-field__content:focus-within {
      border: 2px solid var(--text-field-focus-border-color);
    }

    :host([appearance="outlined"]) .text-field__details {
      padding: 5px 10px;
    }

    :host([appearance="outlined"]) .text-field__text {
      font-size: 12px;
      color: var(--text-field-message-color);
    }

    :host([appearance="outlined"]) .text-field__clearable {
      opacity: 0;
      transition: all .2s;
    }

    /* 
      The rule is added when:

      - The .text-field _content element has a hover & .text-field__input is not empty.
      - The .text-field__input is focused & .text-field__input is not empty
     */
    :host([appearance="outlined"]) .text-field__content:hover .text-field__input:not(:placeholder-shown) ~ .text-field__clearable,
    :host([appearance="outlined"]) .text-field__input:focus:not(:placeholder-shown) ~ .text-field__clearable {
      opacity: 1;
    }
  `

  @property({ type: String, reflect: true })
    appearance: Appearance = 'outlined'

  @property({ type: String, reflect: true })
    color: string | null = 'blue-darken-2'

  @property({ type: Boolean, reflect: true })
    clearable: boolean = false

  @property({ type: String, reflect: true })
    label: string | null = null

  @property({ type: String, reflect: true })
    name: string | null = null

  @property({ type: String, reflect: true })
    hint: string | null = null

  @property({ type: String, reflect: true })
    placeholder: string | null = null

  @state()
    uniqueID: string = generateUniqueKey()

  private _onClearable (): void {
    if (!this.$input) return
    
    this.$input.focus()
    
    this.$input.value = ''
  }

  private get $input (): HTMLInputElement | null {
    return this.shadowRoot?.querySelector('.text-field__input') as HTMLInputElement
  }

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

            <!-- Clerable -->
            ${ this.clearable ? html`<wc-icon class="text-field__clearable" @click=${this._onClearable}>cancel</wc-icon>` : null }
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
