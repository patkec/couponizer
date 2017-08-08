import { CouponizerPage } from './app.po';

describe('couponizer App', () => {
  let page: CouponizerPage;

  beforeEach(() => {
    page = new CouponizerPage();
  });

  it('should display message saying app works', async () => {
    page.navigateTo();
    const paragraphText = await page.getParagraphText();
    expect(paragraphText).toEqual('app works!');
  });
});
