import { IsamtPage } from './app.po';

describe('isamt App', function() {
  let page: IsamtPage;

  beforeEach(() => {
    page = new IsamtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
