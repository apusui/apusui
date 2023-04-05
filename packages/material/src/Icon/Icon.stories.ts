import { html } from 'lit';

import './Icon'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/web-components/writing-stories/introduction
export default {
  title: 'Example/Icons',
  tags: ['autodocs'],
  render: ({}: any) => {
    return html`
      <wc-icon></wc-icon>
    `
  },
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/web-components/writing-stories/args
export const Primary = {
  args: {}
}
