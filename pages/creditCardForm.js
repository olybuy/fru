const Element = require("../framework/baseClasses/baseElement");

module.exports = class CreditCardForm {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator('iframe[title="Donation Widget"]');
    this.continueButton = new Element(
      this.frame,
      '[data-qa="card-continue"]',
      "Continue button",
    );
    this.alertError = new Element(
      this.frame,
      '[data-testid="tooltip-desktop-error-alert"]',
      "Error alert",
    );
  }

  async clickContinueButton() {
    return this.continueButton.click();
  }

  async checkToBeVisible() {
    return this.alertError.isDisplayed();
  }
};
