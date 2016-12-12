import { AngularHerokuPage } from './app.po';

describe('angular-heroku App', function() {
  let page: AngularHerokuPage;

  beforeEach(() => {
    page = new AngularHerokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
