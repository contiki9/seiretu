import { storiesOf } from '@storybook/html';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import notes from '../../../src/components/srt-space/readme.md';

storiesOf('components', module)
  .addDecorator(withActions('onClick'))
  .addDecorator(withKnobs)
  .add(
    'space',
    () => {
      const group = 'layout';
      const displayOptions = {
        'block': 'block',
        'inline-block': 'inline-block',
      };

      const display = select('display', displayOptions, 'block', group);
      const className = text('className', `ma-5 pl-10`, group);

      return `<srt-space
        display = "${display}"
        class = "${className}"
       >
        text text
      </srt-space>`;
    },
    { notes },
  );
