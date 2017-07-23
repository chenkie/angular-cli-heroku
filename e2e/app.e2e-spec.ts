import { AngularCliHerokuPage } from './app.po';

describe('angular-cli-heroku App', () => {
  let page: AngularCliHerokuPage;

  beforeEach(() => {
    page = new AngularCliHerokuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
