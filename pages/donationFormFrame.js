const Element = require("../framework/baseClasses/baseElement");

module.exports = class DonationFormFrame {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator('iframe[title="Donation Widget"]');
    this.buttonMonthlyPlan = new Element(
      this.frame,
      '[data-tracking-element-name="monthlyPlan"]',
      "Monthly payment button",
    );
    this.selectorCurrency = new Element(
      this.frame,
      'select[class="currency-select-control"]',
      "Currency selector",
    );
    this.inputPriceAmount = new Element(
      this.frame,
      'input[data-qa="amount"]',
      "Price amount input",
    );
    this.buttonDonate = new Element(
      this.frame,
      '[data-qa="donate-button"]',
      "Donate button",
    );
  }

  async clickMonthlyPlanButton() {
    return this.buttonMonthlyPlan.click();
  }

  async fillPriceAmount(amount) {
    return this.inputPriceAmount.fill(amount);
  }

  async selectCurrency(currency) {
    return this.selectorCurrency.select(currency);
  }

  async clickDonateButton() {
    return this.buttonDonate.click();
  }
};
