import { INTRANETFrontAngularPage } from './app.po';

describe('intranet-front-angular App', function() {
  let page: INTRANETFrontAngularPage;

  beforeEach(() => {
    page = new INTRANETFrontAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
