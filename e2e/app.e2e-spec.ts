import { StasksMobilePage } from './app.po';

describe('stasks-mobile App', () => {
  let page: StasksMobilePage;

  beforeEach(() => {
    page = new StasksMobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
