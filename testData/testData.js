module.exports = class TestData {
  constructor(json) {
    this.firstName = json.firstName;
    this.lastName = json.lastName;
    this.email = json.email;
    this.cardNumber = json.cardNumber;
    this.cardExpData = json.cardExpData;
    this.cardCVC = json.cardCVC;
  }
};
