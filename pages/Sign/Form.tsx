import React from "react";
import SignupForm from "./SignupForm";
import Signinsuccess from "./Signinsuccess";
import { useState } from "react";

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <>
      {!formIsSubmitted ? (
        <SignupForm submitForm={submitForm} />
      ) : (
        <Signinsuccess />
      )}
    </>
  );
};

export default Form;
