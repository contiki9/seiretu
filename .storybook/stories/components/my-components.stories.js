import { storiesOf } from '@storybook/html';

storiesOf('components', module)
  .add('sample', () => `
  <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
  `)
