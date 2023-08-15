const { test, expect } = require("@playwright/test");
const DonateButtonFrame = require("../pages/elements/donateButtonFrame");
const DonationFormFrame = require("../pages/donationFormFrame");
const PaymentOptionsForm = require("../pages/paymentOptionsForm");
const CardNumberFrame = require("../pages/elements/cardNumberFrame");
const CardExpDateFrame = require("../pages/elements/cardExpDateFrame");
const CardCVCFrame = require("../pages/elements/cardCVCFrame");
const CreditCardForm = require("../pages/creditCardForm");
const PersonalInfoForm = require("../pages/personalInfoForm");
const StartPage = require("../pages/startPage");
const testUsers = require("../testData/testUsers");
const testData = require("../testData/testData");

test("Check payment on desktop", async ({ page }) => {
  const testUser = new testData(testUsers["User 1"]);

  const startPage = new StartPage(page);
  await startPage.goto();

  const donateButton = new DonateButtonFrame(page);
  await donateButton.clickDonateButton();

  const donationForm = new DonationFormFrame(page);
  await donationForm.clickMonthlyPlanButton();
  await donationForm.fillPriceAmount("100");
  await donationForm.selectCurrency("USD");
  await donationForm.clickDonateButton();

  const paymentOptions = new PaymentOptionsForm(page);
  await paymentOptions.disableCoverFees();
  await paymentOptions.clickDonateButton();

  const cardForm = new CreditCardForm(page);

  const cardNumber = new CardNumberFrame(donationForm.frame);
  await cardNumber.fillInputCardNumber(testUser.cardNumber);

  const cardExpDate = new CardExpDateFrame(donationForm.frame);
  await cardExpDate.fillInputCardExpDate(testUser.cardExpData);

  const cardCVC = new CardCVCFrame(donationForm.frame);
  await cardCVC.fillInputCardCVC(testUser.cardCVC);

  await cardForm.clickContinueButton();

  const personalInfo = new PersonalInfoForm(page);
  await personalInfo.fillFirstName(testUser.firstName);
  await personalInfo.fillLastName(testUser.lastName);
  await personalInfo.fillEmail(testUser.email);
  await personalInfo.clickContinueButton();

  await expect(await cardForm.checkToBeVisible()).toBeTruthy;
});
