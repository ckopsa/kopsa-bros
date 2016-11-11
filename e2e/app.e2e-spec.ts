import { GithubIoPage } from './app.po';

describe('github-io App', function() {
  let page: GithubIoPage;

  beforeEach(() => {
    page = new GithubIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
