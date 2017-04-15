import { CouponizerPage } from './app.po';

describe('couponizer App', () => {
  let page: CouponizerPage;

  beforeEach(() => {
    page = new CouponizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
