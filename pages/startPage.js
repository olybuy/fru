module.exports = class StartPage {
  url = "https://data.fundraiseup.com/qa-test-7R58U3/";

  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.url);
  }
};
