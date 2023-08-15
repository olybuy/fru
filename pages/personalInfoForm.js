const Element = require("../framework/baseClasses/baseElement");

module.exports = class PersonalInfoForm {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator('iframe[title="Donation Widget"]');
    this.firstNameField = new Element(
      this.frame,
      'input[name="firstName"]',
      "First name field",
    );
    this.lastNameField = new Element(
      this.frame,
      'input[name="lastName"]',
      "Last name field",
    );
    this.emailFiled = new Element(
      this.frame,
      'input[name="lastName"]',
      "Email field",
    );
    this.buttonContinue = new Element(
      this.frame,
      '[data-qa="privacy-continue"]',
      "Continue button",
    );
  }

  async fillFirstName(value) {
    return this.firstNameField.fill(value);
  }

  async fillLastName(value) {
    return this.lastNameField.fill(value);
  }

  async fillEmail(value) {
    return this.emailFiled.fill(value);
  }

  async clickContinueButton() {
    return this.buttonContinue.click();
  }
};
