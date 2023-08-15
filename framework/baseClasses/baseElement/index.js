const Logger = require("../../logger");

module.exports = class Element {
  constructor(page, selector, name) {
    this.page = page;
    this.selector = selector;
    this.name = name;
  }

  async isDisplayed() {
    Logger.info(`Element "${this.name}" is displayed`);
    return this.page.locator(this.selector).isVisible();
  }

  async getFrameLocatorOfElement() {
    return this.page.frameLocator(this.selector);
  }

  async click() {
    Logger.info(`Click at "${this.name}"`);
    await this.page.locator(this.selector).click();
  }

  async fill(amount) {
    Logger.info(`Fill "${this.name}" field`);
    await this.page.locator(this.selector).fill(amount);
  }

  async select(option) {
    Logger.info(`Select in "${this.name}" option ${option}`);
    await this.page.locator(this.selector).selectOption(option);
  }

  async getAttribute(attributeName) {
    Logger.info(
      `Getting attribute "${attributeName}" from ${this.name} element`,
    );
    return this.page.locator(this.selector).getAttribute(attributeName);
  }
};
