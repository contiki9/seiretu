import { newSpecPage } from '@stencil/core/testing';
import { SrtSpace } from '../srt-space';

describe('srt-space', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SrtSpace],
      html: `<srt-space></srt-space>`,
    });
    expect(page.root).toEqualHtml(`
      <srt-space>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </srt-space>
    `);
  });
});
