import { html } from 'lit'

import './TextField'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/web-components/writing-stories/introduction
export default {
  title: 'Example/TextFields',
  tags: ['autodocs'],
  render: ({ appearance, color, clearable, label, hint, placeholder, rounded }: any) => {
    return html`
      <wc-text-field
        appearance=${appearance}
        color=${color}
        ?clearable=${clearable}
        label=${label}
        hint=${hint}
        placeholder=${placeholder}
        ?rounded=${rounded}
      ></wc-text-field>
    `
  },
  argTypes: {
    appearance: {
      control: 'inline-radio',
      options: ['regular', 'outlined', 'filled']
    },
    color: { control: 'text' },
    clearable: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    hint: { control: 'text' },
    placeholder: { control: 'text' },
    rounded: { control: 'boolean' }
  }
};

export const Regular = {
  args: {
    appearance: 'regular',
    label: 'Fullname',
    hint: 'Example: Ivan Zaldivar'
  }
}

export const Outlined = {
  args: {
    appearance: 'outlined',
    label: 'Your landing page',
    hint: 'www.domain.com/home'
  }
}

export const Filled = {
  args: {
    appearance: 'filled',
    label: 'Address',
    hint: '1367 East Kent Ave N'
  }
}
