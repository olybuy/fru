const Element = require("../../framework/baseClasses/baseElement");

module.exports = class CardExpDateFrame {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator(
      'iframe[title="Secure expiration date input frame"]',
    );
    this.cardExpDateInput = new Element(
      this.frame,
      'input[name="exp-date"]',
      "Card expiration date field",
    );
  }

  async fillInputCardExpDate(value) {
    return this.cardExpDateInput.fill(value);
  }
};
