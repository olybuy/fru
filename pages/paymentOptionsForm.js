const Element = require("../framework/baseClasses/baseElement");

module.exports = class PaymentOptionsForm {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator('iframe[title="Donation Widget"]');
    this.coverFeeCheckbox = new Element(
      this.frame,
      '[data-qa="cover-fee-checkbox"]',
      "Cover fee checkbox",
    );
    this.donateButton = new Element(
      this.frame,
      '[data-qa="cc-button"]',
      "Donate button",
    );
  }

  async clickCoverFeeCheckbox() {
    return this.coverFeeCheckbox.click();
  }

  async clickDonateButton() {
    return this.donateButton.click();
  }

  async isCoverFeesEnabled() {
    const status = await this.coverFeeCheckbox.getAttribute("aria-checked");
    return status === "true";
  }

  async disableCoverFees() {
    if ((await this.isCoverFeesEnabled()) === true) {
      await this.clickCoverFeeCheckbox();
    }
  }
};
