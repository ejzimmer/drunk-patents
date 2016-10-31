import { DrunkPatentsPage } from './app.po';

describe('drunk-patents App', function() {
  let page: DrunkPatentsPage;

  beforeEach(() => {
    page = new DrunkPatentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
