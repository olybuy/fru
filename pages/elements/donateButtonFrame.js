const Element = require("../../framework/baseClasses/baseElement");

module.exports = class DonateButtonFrame {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator('iframe[title="Donate Button"]');
    this.buttonDonate = new Element(
      this.frame,
      '[data-qa="donate-button-label"]',
      "Donate button",
    );
  }

  async clickDonateButton() {
    return this.buttonDonate.click();
  }
};
