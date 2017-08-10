import { BookingenginePage } from './app.po';

describe('bookingengine App', () => {
  let page: BookingenginePage;

  beforeEach(() => {
    page = new BookingenginePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
