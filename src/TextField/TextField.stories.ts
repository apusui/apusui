import { html } from 'lit';
import './TextField'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/web-components/writing-stories/introduction
export default {
  title: 'Example/TextFields',
  tags: ['autodocs'],
  render: ({ label, hint, placeholder, color }: any) => {
    return html`
      <wc-text-field-outlined
        label=${label}
        hint=${hint}
        placeholder=${placeholder}
        color=${color}
      ></wc-text-field-outlined>
    `
  },
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    hint: { control: 'text' },
    placeholder: { control: 'text' },
    color: { control: 'text' }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/web-components/writing-stories/args
export const Primary = {
  args: {
    label: 'Your landing page',
    hint: 'www.domain.com/home'
  }
}
