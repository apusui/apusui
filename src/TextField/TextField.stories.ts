import './TextField'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/web-components/writing-stories/introduction
export default {
  title: 'Example/TextFields',
  tags: ['autodocs'],
  render: (_args: any) => {
    const $textField = document.createElement('wc-text-field')

    return $textField
  },
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/web-components/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button'
  }
}
