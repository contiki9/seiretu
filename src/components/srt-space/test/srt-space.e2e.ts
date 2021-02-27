import { newE2EPage } from '@stencil/core/testing';

describe('srt-space', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<srt-space></srt-space>');

    const element = await page.find('srt-space');
    expect(element).toHaveClass('hydrated');
  });
});
