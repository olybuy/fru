const Element = require("../../framework/baseClasses/baseElement");

module.exports = class CardNumberFrame {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator(
      'iframe[title="Secure card number input frame"]',
    );
    this.cardNumberInput = new Element(
      this.frame,
      'input[name="cardnumber"]',
      "Card number field",
    );
  }

  async fillInputCardNumber(value) {
    return this.cardNumberInput.fill(value);
  }
};
