import { BowlingKataPage } from './app.po';

describe('bowling-kata App', () => {
  let page: BowlingKataPage;

  beforeEach(() => {
    page = new BowlingKataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
