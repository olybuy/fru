module.exports = class BrowserActions {
  constructor(page) {
    this.page = page;
  }

  getFrame(locator) {
    return this.page.frameLocator(locator);
  }
};
