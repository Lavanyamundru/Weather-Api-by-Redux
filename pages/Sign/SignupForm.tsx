import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Title, Div } from "./Appstyle";
import { Middle, Name, Parent, Button, P, Label, Input } from "./Appstyle";
import { Child } from "./Appstyle";
import validation from "./validation";
import sass from "sass";
import Signinsuccess from "./Signinsuccess";

// export interface Loginstyle {
//   firstName: string;
//   LastName: string;
//   Email: string;
//   password: string;
//   Repeatpassword: string;
// }
interface Login {
  firstName: string;
  LastName: string;
  Email: string;
  password: string;
  Repeatpassword: string;
}
export interface Errorlogin {
  firstNameerror: string;
  LastNameerror: string;
  Emailerror: string;
  passworderror: string;
}
const SignupForm = ({ submitForm }: any) => {
  const initialValues = {
    firstName: "",
    LastName: "",
    Email: "",
    password: "",
    Repeatpassword: "",
  };
  const [values, setValues] = useState<Login>(initialValues);

  const [errors, setErrors] = useState<Errorlogin>({
    firstNameerror: "",
    LastNameerror: "",
    Emailerror: "",
    passworderror: "",
  });
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [checkded, setCheckded] = useState(false);

  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setCheckded(!checkded);
  };
  const handleFormSubmit = () => {
    // event.preventdefault();
    setErrors(validation(values));
    console.log("errors", errors);
    setDataIsCorrect(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
      // <Signinsuccess />;
    }
  });

  return (
    <>
      <Container>
        {/* <Appwrapper> */}
        <Title>
          <h2>Login Form</h2>
        </Title>
        <form>
          <Div>
            <label>FirstName :</label>
            <Input
              type="text"
              name="firstName"
              placeholder="first Name"
              value={values.firstName}
              onChange={handleChange}
            />

            {errors.firstNameerror && <P> {errors.firstNameerror}</P>}
          </Div>
          <br></br>
          <Middle>
            <label>LastName :</label>
            <Input
              type="text"
              name="LastName"
              placeholder=" Last Name"
              value={values.LastName}
              onChange={handleChange}
            />
            {errors.LastNameerror && <P> {errors.LastNameerror}</P>}
          </Middle>
          <br></br>
          <Name>
            <label>Email Id :</label>
            <Input
              type="text"
              name="Email"
              placeholder="Email"
              value={values.Email}
              onChange={handleChange}
            />
            {errors.Emailerror && <P> {errors.Emailerror}</P>}
          </Name>
          <br></br>
          <Parent>
            <label>Password :</label>
            <Input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />

            {errors?.passworderror && <P> {errors?.passworderror}</P>}
          </Parent>
          <br></br>
          <Child>
            <label>RepeatPassword :</label>
            <Input
              type="password"
              placeholder="RepeatPassword"
              name="psw-repeat"
            />
          </Child>
          <br></br>
          <div>
            <Button onClick={handleFormSubmit}>Sign in</Button>
          </div>
          <Label>
            <input type="checkbox" checked={checkded} onClick={handleChange} />
            Remember me
          </Label>
        </form>
        {/* </Appwrapper> */}
      </Container>
    </>
  );
};

export default SignupForm;
