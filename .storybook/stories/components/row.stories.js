import { storiesOf } from '@storybook/html';

storiesOf('components', module)
  .add('row', () => `
  <srt-row align="center" nowrap space="80px">
      <div>sample
        <div>sss</div>
      </div>
      <div class="srt-spacer"></div>
        <div>sample2</div>
        <div>sample3</div>
    </srt-row>
  `)
