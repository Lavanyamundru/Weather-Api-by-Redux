import { Errorlogin } from "./Account";

const validation = (values: any) => {
  const errors = {} as Errorlogin;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!values.UserName) {
    errors.UserNameerror = "Please enter valid user name";
  }
 if (!values.Email) {
    errors.Emailerror = "Please enter valid Email";
  } else if (!regex.test(values.Email)) {
    errors.Emailerror = "This is not a valid email format!";
  }
  if (!values.Password) {
    errors.Passworderror = "Please enter valid password";
  } else if (values.Password.length < 4) {
    errors.Passworderror = "password must be more than 4 characters";
  }
else{
    errors.isPassed=true;
}
  return errors;
};

export default validation;
