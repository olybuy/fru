module.exports = class Frame {
  constructor(page, selector) {
    this.page = page;
    this.selector = selector;
  }

  async switchToFrame() {
    return this.page.frameLocator(this.selector);
  }
};
