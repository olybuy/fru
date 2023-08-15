const Logger = require("../../logger");
const Element = require("../baseElement");

module.exports = class baseForm {
  constructor(page, selector, name) {
    this.page = page;
    this.selector = selector;
    this.name = name;
    this.form = new Element(this.selector, this.name);
  }

  async isFormDisplayed() {
    const isDisplayed = await this.form.isDisplayed();
    Logger.info(`Form "${this.name}" is displayed - "${isDisplayed}"`);
    return isDisplayed;
  }
};
