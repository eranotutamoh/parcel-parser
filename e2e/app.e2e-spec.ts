import { ParselPage } from './app.po';

describe('parsel App', () => {
  let page: ParselPage;

  beforeEach(() => {
    page = new ParselPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
