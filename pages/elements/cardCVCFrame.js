const Element = require("../../framework/baseClasses/baseElement");

module.exports = class CardCVCFrame {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator('iframe[title="Secure CVC input frame"]');
    this.cardCVCInput = new Element(
      this.frame,
      'input[name="cvc"]',
      "Card CVC field",
    );
  }

  async fillInputCardCVC(value) {
    return this.cardCVCInput.fill(value);
  }
};
