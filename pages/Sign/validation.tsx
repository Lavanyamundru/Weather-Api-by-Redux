import { Errorlogin } from "./SignupForm";

const validation = (values: any) => {
  const errors = {} as Errorlogin;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!values.firstName) {
    errors.firstNameerror = "FirstName is required!";
  }
  if (!values.LastName) {
    errors.LastNameerror = "LastName is required!";
  }
  if (!values.Email) {
    errors.Emailerror = "email is required!";
  } else if (!regex.test(values.Email)) {
    errors.Emailerror = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.passworderror = "password is required!";
  } else if (values.password.length < 4) {
    errors.passworderror = "password must be more than 4 characters";
  }

  return errors;
};

export default validation;
