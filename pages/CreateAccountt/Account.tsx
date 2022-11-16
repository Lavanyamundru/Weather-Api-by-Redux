import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import {
  ButtonDiv1,
  ButtonDiv2,
  Button,
  ParentDiv,
  Div,
  Wrapper,
} from "./Accountstyle";
import { ButtonDiv3, P, ChildDiv, Input, Pre, Para } from "./Accountstyle";
import {
  ContentDiv,
  Line,
  Label,
  Form,
  Select,
  Container,
  Div3,
  Div5,
} from "./Accountstyle";
import { Div1, Div2 } from "./Accountstyle";
import validation from "./Validation1";
import validation2 from "./Validation2";
import Login1 from "./Login";
import Dropbox from "./Dropbox";

export interface Errorpage {
  FirstNameerror: string;
  LastNameerror: string;
  Confirmemailerror: string;
  Legalerror: string;
  Websiteerror: string;
  Languageerror: string;
  Addresserror: string;
  Cityerror: string;
  Postalerror: string;
  Countryerror: string;
  Socialmediaerror: string;
  Retailerror: string;
  Socialerror: string;
  Serviceerror: string;
  Termserror: string;
  isPassed: boolean;
  isSecondStepPassed: boolean;
}

export interface Errorlogin {
  UserNameerror: string;
  Emailerror: string;
  Passworderror: string;
  isPassed: boolean;
}

export interface Login {
  UserName: string;
  Email: string;
  Password: string;
}
export interface Page {
  FirstName: string;
  LastName: string;
  Confirmemail: string;
  Legal: string;
  Website: string;
  Language: string;
  Address: string;
  City: string;
  Postal: string;
  Country: string;
  Socialmedia: string;
  Retail: string;
  Social: string;
  Service: boolean;
  Terms: boolean;
}
const steps = ["", ""];
const Account = (props: any) => {
  const router = useRouter();

  const initialValues = {
    UserName: "",
    Email: "",
    Password: "",
  };
  const secondValues = {
    FirstName: "",
    LastName: "",
    Confirmemail: "",
    Legal: "",
    Website: "",
    Language: "",
    Address: "",
    City: "",
    Postal: "",
    Country: "",
    Socialmedia: "",
    Retail: "",
    Social: "",
    Service: false,
    Terms: false,
  };

  const [values, setValues] = useState<Login>(initialValues);
  const [val, setVal] = useState<Page>(secondValues);
  const [errors, setErrors] = useState<Errorlogin>({
    UserNameerror: "",
    Emailerror: "",
    Passworderror: "",
    isPassed: false,
  });
  const [err, setErr] = useState<Errorpage>({
    FirstNameerror: "",
    LastNameerror: "",
    Confirmemailerror: "",
    Legalerror: "",
    Websiteerror: "",
    Languageerror: "",
    Addresserror: "",
    Cityerror: "",
    Postalerror: "",
    Countryerror: "",
    Socialmediaerror: "",
    Retailerror: "",
    Socialerror: "",
    Serviceerror: "",
    Termserror: "",
    isPassed: false,
    isSecondStepPassed: false,
  });
  const [joinCreator, setJoinUser] = useState(true);
  const [isfirststep, setIsfirststep] = useState(true);
  const [isSecondStepPassed, setIsSecondStepPassed] = useState(false);
  const [details, setDetails] = useState(true);
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const [activeStep, setActiveStep] = useState(0);
  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setVal({ ...val, [event.target.name]: event.target.value });
  };
  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };
  const HandleCreateAccountClick = (event: any) => {
    setErrors(validation(values));
    console.log("errors", errors);
    errors.isPassed ? setIsfirststep(false) : setIsfirststep(true);
    setErr(validation2(val));
    console.log("err", err);
    err.isSecondStepPassed
      ? setIsSecondStepPassed(true)
      : setIsSecondStepPassed(false);
  };
  //   const btn = document.getElementById('Button');
  //  Button.addEventListener('click', function onClick() {
  //     Button.style.background-Color = 'salmon';
  //     Button.style.color = 'white';
  // " ${(changeColor === true)? 'white':'grey'}"
  //   });

  useEffect(() => {
    if (isSecondStepPassed && joinCreator) {
      props.setneedRedirection(true);
      // router.push("/CreateAccountt/Dropbox");
    }
    if (errors.isPassed && !joinCreator) {
      // router.push("/CreateAccountt/Dropbox");
      props.setneedRedirection(true);
    }
  }, [isSecondStepPassed, isfirststep]);

  return (
    <>
      <Wrapper>
        <Div>
          <ParentDiv>
            <Button onClick={() => setJoinUser(true)}>Join as Creator</Button>
          </ParentDiv>
          <ParentDiv>
            <Button onClick={() => setJoinUser(false)}>Join as User</Button>
          </ParentDiv>
        </Div>

        {joinCreator ? (
          <ChildDiv>
            Import or upload your content, tag with product links to your
            favorite stores and share on all social platforms – for free
          </ChildDiv>
        ) : (
          <ChildDiv>
            Browse curated inspiration from your favorite creators, shop their
            style, and create collaborative mood boards to share with others –
            for free
          </ChildDiv>
        )}
        {joinCreator && (
          <Box sx={{ width: "50%", mt: 2, ml: 17 }}>
            <Stepper
              sx={{ color: "red" }}
              activeStep={activeStep}
              alternativeLabel
            >
              {steps.map((label) => (
                <Step sx={{ color: "red" }} key={label}>
                  <StepLabel sx={{ color: "red" }}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          // <Div5>
          //   <ButtonDiv1 onClick={() => setDetails(true)}>1</ButtonDiv1>
          //   <ButtonDiv2 onClick={() => setDetails(false)}>2</ButtonDiv2>
          // </Div5>
        )}
        {isfirststep && (
          <div>
            <Div1>
              <a
                href="https://www.facebook.com/login.php?skip_api_login=1&api_key=397936738266063&kid_directed_site=0&app_id=397936738266063&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv8.0%2Fdialog%2Foauth%3Fresponse_type%3Dcode%252Cgranted_scopes%26client_id%3D397936738266063%26redirect_uri%3Dhttps%253A%252F%252Festhersprod-58a48.firebaseapp.com%252F__%252Fauth%252Fhandler%26state%3DAMbdmDmZsQvNBo8b-KFIoziMmbxxiQ0wcqPeitM9Sg4QNWdknk4lxbmsX0ll0Sw0dXW-Gauh3QiXO4q6hyG8fQCK_LNPys2Sg6u1BBUc_sYfCcRDPIpCRZAsrGCB50VyOBk8q0mxP9BBB9HoNgovrNMWCYLYaPsb0LWzk0s85AeJSZiXwm9KFvweE4trVdQbdtoGaVxOruMhk8pcG6o3U1dBDk5fjp1TmiIQhafev9pL0QTFIwYbzNwPIMLzxq96ec4OgbH_vDzVUL6U-GB2qgnY-gMbzov8NDWb1TNOhZC_duIupBUFMqxobzZWR4NqT9SajXVNg2gKF0pe4DzNxFqCbdQ%26scope%3Dpublic_profile%252Cemail%26context_uri%3Dhttps%253A%252F%252Festhers.se%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D6a726c3d-5e23-49b0-9cf2-b7d704a3e932%26tp%3Dunspecified&cancel_url=https%3A%2F%2Festhersprod-58a48.firebaseapp.com%2F__%2Fauth%2Fhandler%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DAMbdmDmZsQvNBo8b-KFIoziMmbxxiQ0wcqPeitM9Sg4QNWdknk4lxbmsX0ll0Sw0dXW-Gauh3QiXO4q6hyG8fQCK_LNPys2Sg6u1BBUc_sYfCcRDPIpCRZAsrGCB50VyOBk8q0mxP9BBB9HoNgovrNMWCYLYaPsb0LWzk0s85AeJSZiXwm9KFvweE4trVdQbdtoGaVxOruMhk8pcG6o3U1dBDk5fjp1TmiIQhafev9pL0QTFIwYbzNwPIMLzxq96ec4OgbH_vDzVUL6U-GB2qgnY-gMbzov8NDWb1TNOhZC_duIupBUFMqxobzZWR4NqT9SajXVNg2gKF0pe4DzNxFqCbdQ%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
                onClick={HandleCreateAccountClick}
              >
                Register with Facebook
              </a>
            </Div1>
            <Div2>
              <a
                href="https://accounts.google.com/o/oauth2/auth/identifier?response_type=code&client_id=580794169231-0ocmn9gatktikim8u3k1lvtcl8b1rk0l.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Festhersprod-58a48.firebaseapp.com%2F__%2Fauth%2Fhandler&state=AMbdmDlRFRDIINs3d6ErhRsxu3U5uYL4ZMsXUN53HX7npLnZSfKj9heeQVpM66zPCDwh4p_ZSJZoTei_DJjntNkU-Ijj2jKhWr_oydanwQIxy63BDi_NK9A4j0036-thCjQX8-L2-Xud8XpCnDj9RT-kFfu1tQ5-gmXw51sKDEFGWVONAxaiTFu15N-P4svzmArnadjlYWtOUUciZnwLMnXECBGU9D9vFFGeodLmG5sHBX8T5F28gG50tHfOhD_OCJnov0FRxxXxjRQwW8W-CVu2y3SvmlQ5zBbI0eGJJ_bYePLMY8B9AHROB2Le-O58oj8x4HS_uFRIqYmJ&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20profile&context_uri=https%3A%2F%2Festhers.se&service=lso&o2v=1&flowName=GeneralOAuthFlow"
                onClick={HandleCreateAccountClick}
              >
                Register with Google
              </a>
            </Div2>

            <ContentDiv>
              <div>
                <Input
                  type="text"
                  name="UserName"
                  placeholder="UserName *"
                  onChange={handleChange}
                />
                {errors.UserNameerror && <P> {errors.UserNameerror} </P>}
              </div>
              <div>
                <Input
                  type="text"
                  name="Email"
                  placeholder="Email*"
                  onChange={handleChange}
                />
                {errors.Emailerror && <P> {errors.Emailerror} </P>}
              </div>
              <div>
                <Input
                  type="text"
                  name="Password"
                  placeholder="Password*"
                  onChange={handleChange}
                />
                {errors.Passworderror && <P> {errors.Passworderror} </P>}
              </div>
              <div>
                <Input
                  type="text"
                  name=" Confirm Password*"
                  placeholder=" Confirm Password*"
                />
              </div>
            </ContentDiv>
          </div>
        )}
        {isfirststep && (
          <div>
            {/* <Div4>
           <Link href="/CreateAccount/Create Account">Create Account</Link>
         </Div4> */}
            <ButtonDiv3
              onClick={(e) => {
                if (activeStep === 0) {
                  setActiveStep((prevState) => prevState + 1);
                } else {
                  HandleCreateAccountClick(e);
                }
              }}

              // onClick={(e) => {
              //   if(activeStep ===0){
              //   setActiveStep((prevState) => prevState + 1)
              // }
              // } else {
              //   HandleCreateAccountClick(e)
              // }
              // }
            >
              Create Account
              {/* {!joinCreator && (
                <div>
                  <Link href="cretaeAccount/Dropbox"></Link>
                </div>
              )}  */}
            </ButtonDiv3>

            <Pre>
              By signing up, you accept our terms of use. Read more about how we
              collect, use and share your data in our privacy policy and how we
              use cookies and similar technology in our cookie policy.
            </Pre>
            <Line></Line>
            <Para>Already have an account?</Para>
            <br></br>
            <Div3>
              <Link href="/CreateAccount/Login">Login</Link>
            </Div3>

            {/* <Button3 onClick={HandleCreateAccountClick}>Login</Button3> */}
          </div>
        )}

        {joinCreator && !isfirststep && (
          <Form>
            <Label>Contact Information</Label>
            <div>
              <Input
                type="text"
                name="FirstName"
                placeholder="FirstName"
                onChange={handleChange}
              />
              {err.FirstNameerror && <P> {err.FirstNameerror} </P>}
            </div>
            <div>
              <Input
                type="text"
                placeholder="LastName"
                name="LastName"
                onChange={handleChange}
              />
              {err.LastNameerror && <P> {err.LastNameerror} </P>}
            </div>
            <div>
              <Input
                type="text"
                placeholder="EmailName"
                value={values.Email}
                name="Email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Confirmemail"
                name="Confirmemail"
                onChange={handleChange}
              />
              {err.Confirmemailerror && <P> {err.Confirmemailerror} </P>}
            </div>
            <div>
              <Select onChange={handleChange} name="Legal">
                <option value=" Select legalType"> Select legalType</option>
                <option value=" Individual"> Individual</option>
                <option value="partnership">partnership </option>
                <option value="Corporation">corporation </option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="Non-US Entity">Non-US Entity </option>
                <option value="Foreign"> Foreign</option>
                <option value="LLC">LLC</option>
                <option value="LLP"> LLP</option>
                <option value="Non profit">Non profit</option>
                <option value="other"> other</option>
              </Select>
              {err.Legalerror && <P> {err.Legalerror} </P>}
            </div>
            <div>
              <Input
                type="text"
                name="Company"
                placeholder="Company/individual/Website Name"
              />
            </div>
            <div>
              <Input
                type="text"
                name="Website"
                placeholder="Link To website/Socialmedia"
                onChange={handleChange}
              />
              {err.Websiteerror && <P> {err.Websiteerror} </P>}
            </div>

            <Label> Mailing Address</Label>
            <div>
              <Input
                type="text"
                name="Address"
                placeholder="Address line1"
                onChange={handleChange}
              />
              {err.Addresserror && <P> {err.Addresserror} </P>}
            </div>
            <div>
              <Input
                type="text"
                name="Address2"
                placeholder="Address line2"
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="City*"
                name="City"
                onChange={handleChange}
              />
              {err.Cityerror && <P> {err.Cityerror} </P>}
            </div>
            <div>
              <Input
                type="text"
                name="Postal"
                placeholder="Zip/Postal code*"
                onChange={handleChange}
              />
              {err.Postalerror && <P> {err.Postalerror} </P>}
            </div>
            <div>
              <Select name="Country" onChange={handleChange}>
                <option value=" Select Country"> Select Country</option>
                <option value=" Afrikaans"> Afrikaans</option>
                <option value="Arabic">Arabic </option>
                <option value="Belarusian"> Belarusian</option>
                <option value="Catalan"> Catalan</option>
                <option value="Czech">Czech </option>
                <option value="Danish">Danish</option>
                <option value="German">German</option>
                <option value="Greek">Greek</option>
                <option value="English">English</option>
                <option value="Spanish"> Spanish</option>
              </Select>
              {err.Countryerror && <P> {err.Countryerror} </P>}
            </div>
            <Line></Line>
            <div>
              <Label>Additional Information</Label>
              <br></br>
              <Label> If you are interested in Retail Collobaration</Label>
              <br></br>
              <Container>
                <input
                  type="radio"
                  id="yes"
                  name="Retail"
                  value="YES"
                  onChange={handleChange}
                />
                <label htmlFor="YES"> YES</label>

                <input
                  type="radio"
                  id="no"
                  value="NO"
                  name="Retail"
                  onChange={handleChange}
                />
                <label htmlFor="NO">NO</label>
              </Container>
              {err.Retailerror && <P> {err.Retailerror} </P>}
            </div>
            <div>
              <Label>I Approve Sharing my information on social media </Label>
            </div>
            <br></br>
            <Container>
              <input
                type="radio"
                id="yes"
                value="YES"
                name="Socialmedia"
                onChange={handleChange}
              />
              <label htmlFor="YES"> YES</label>
              <input
                type="radio"
                id="no"
                name="Socialmedia"
                value="NO"
                onChange={handleChange}
              />
              <label htmlFor="NO">NO</label>
            </Container>
            {err.Socialerror && <P> {err.Socialerror} </P>}
            <br></br>
            <Line></Line>
            <div>
              <Label>
                <input
                  type="checkbox"
                  checked={val.Service}
                  onChange={() => setVal({ ...val, Service: !val.Service })}
                  name="Service"
                />
                I agree to Esther`s scandinavia AB`s
                <a href="#" target="_blank">
                  terms of service
                </a>
              </Label>
              {err.Serviceerror && <P> {err.Serviceerror} </P>}
            </div>
            <div>
              <Label>
                <input
                  type="checkbox"
                  checked={val.Terms}
                  onChange={() => setVal({ ...val, Terms: !val.Terms })}
                  name="Terms"
                />
                I agree to Everflows
                <a href="#" target="_blank">
                  terms of service
                </a>
              </Label>
              {err.Termserror && <P> {err.Termserror} </P>}
            </div>
            <ButtonDiv3 onClick={HandleCreateAccountClick}> Submit</ButtonDiv3>
          </Form>
        )}
        {/* {errors.isPassed && !joinCreator && redirectToDropbox()}
        {isSecondStepPassed && joinCreator && redirectToDropbox()} */}
      </Wrapper>
    </>
  );
};

export default Account;
