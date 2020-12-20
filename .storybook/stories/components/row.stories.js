import { storiesOf } from '@storybook/html';
import { withKnobs, select,boolean,text } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import notes from '../../../src/components/srt-row/readme.md';

storiesOf('components', module)
  .addDecorator(withActions('onClick'))
  .addDecorator(withKnobs)
  .add('row', () => {
    const group = 'layout'
    const alignOptions = {
      stretch: 'stretch',
      start: 'start',
      center: 'center',
      end: 'end',
    };
    const justifyOptions = {
      stretch: 'stretch',
      start: 'start',
      center: 'center',
      end: 'end',
      spaceBetween: 'space-between',
      spaceAround: 'space-around',
      spaceEvenly: 'space-evenly',
    };
    const alignContentOptions = {
      stretch: 'stretch',
      start: 'start',
      center: 'center',
      end: 'end',
      spaceBetween: 'space-between',
      spaceAround: 'space-around',
      spaceEvenly: 'space-evenly',
    };

    const justify = select('justify', justifyOptions, null, group);
    const alignContent = select('alignContent', alignContentOptions, null, group);
    const align = select('align', alignOptions, null, group);
    const space = text('space', '40px',group);
    const nowrap = boolean('nowrap', false, group);
    const column = boolean('column', false, group);

    return(`<srt-row
       justify = ${justify}
       align = ${align}
       nowrap = ${nowrap}
       space = ${space}
       column = ${column}
       alignContent = ${alignContent}
       >
        <div>sample
          <div>ssss</div>
        </div>
          <div>sample2</div>
          <div>sample3</div>
      </srt-row>`)
    },{ notes }
  );
