import { Errorpage } from "./Account";
const validation2 = (val: any) => {
  const errors = {} as Errorpage;
  errors.isSecondStepPassed = true;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!val.FirstName) {
    errors.FirstNameerror = "Please enter your firstname";
    errors.isSecondStepPassed = false;
  }
  if (!val.LastName) {
    errors.LastNameerror = "Please enter your last name";
    errors.isSecondStepPassed = false;
  }
  if (!val.Confirmemail) {
    errors.Confirmemailerror = "Please enter valid Email";
    errors.isSecondStepPassed = false;
  } else if (!regex.test(val.Confirmemail)) {
    errors.Confirmemailerror = "This is not a valid email format!";
    errors.isSecondStepPassed = false;
  }
  if (!val.Legal) {
    errors.Legalerror = "Please select legal type";
    errors.isSecondStepPassed = false;
  }
  if (!val.Website) {
    errors.Websiteerror = "Please select Website/social media link(https://";
    errors.isSecondStepPassed = false;
  }
  // if (!val.Language) {
  //   errors.Languageerror = "Please select your language";
  //   errors.isSecondStepPassed = false;
  // }
  if (!val.Address) {
    errors.Addresserror = "Please enter your address";
    errors.isSecondStepPassed = false;
  }
  if (!val.City) {
    errors.Cityerror = "Please enter your city";
    errors.isSecondStepPassed = false;
  }
  if (!val.Postal) {
    errors.Postalerror = "Please enter your city";
    errors.isSecondStepPassed = false;
  }
  if (!val.Country) {
    errors.Countryerror = "Please enter your city";
    errors.isSecondStepPassed = false;
  }
  if (!val.Socialmedia) {
    errors.Socialmediaerror = "Please enter your postal code";
    errors.isSecondStepPassed = false;
  }
  if (!val.Retail) {
    errors.Retailerror =
      "Please enter if you are interested in Retail Collabaration";
    errors.isSecondStepPassed = false;
  }
  // if (!val.Social) {
  //   errors.Socialerror = "Please Select your consent for social media";
  // }
  if (!val.Service) {
    errors.Serviceerror = "Please Select your consent for service";
    errors.isSecondStepPassed = false;
  }
  if (!val.Terms) {
    errors.Termserror = "Please Select your consent for terms";
    errors.isSecondStepPassed = false;
  }
  return errors;
};

export default validation2;
