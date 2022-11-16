import React, { useState } from "react";
import styled from "styled-components";
const Div = styled.div`
  width: 500px;
  height: 480px;
  border: 1px solid rgb(238, 238, 238);
  background-color: white;
  margin-top: -50px;
  margin-left: 400px;
`;
const Div1 = styled.div`
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(66, 103, 178);
  width: 430px;
  height: 40px;
  margin-left: 40px;
  margin-top: 40px;
  cursor: pointer;
  text-align: center;
  font-family: Inter, sans-serif;
  opacity: 1;
  font-weight: 600;
  border-radius: 3px;
  color: white;
  padding-top: 10px;
  font-size: 14px;
`;
const Div2 = styled.div`
  width: 432px;
  height: 40px;
  border: 1px solid rgb(238, 238, 238);
  margin-top: 10px;
  margin-left: 37px;
  border-radius: 3px;
  text-align: center;
  font-family: Inter, sans-serif;
  opacity: 1;
  font-weight: 600;
  padding-top: 5px;
  background-color: white;
  cursor: pointer;
  padding-top: 10px;
  color: rgb(58, 58, 58);
  font-size: 14px;
`;
const Input = styled.input`
  width: 432px;
  height: 40px;
  border: 1px solid rgb(238, 238, 238);
  margin-top: 10px;
  margin-left: 37px;
  border-radius: 3px;
  padding-left: 13px;
  padding-top: 5px;
  background-color: white;
`;
export const Button1 = styled.div`
  border: 1px solid rgb(238, 238, 238);
  cursor: pointer;
  width: 432px;
  height: 40px;
  margin-top: 30px;
  margin-left: 37px;
  border-radius: 3px;
  padding-left: 13px;
  padding-top: 10px;
  background-color: #34554a;
  text-align: center;
  font-family: Inter, sans-serif;
  opacity: 1;
  font-weight: 600;
  color: white;
  font-size: 14px;
`;
const Div3 = styled.div`
  margin-top: 30px;
`;
const Div4 = styled.div`
  margin-top: 30px;
  margin-left: 150px;
`;
const P = styled.p`
  color: red;
  font-size: 13px;
  margin-left: 35px;
`;
export interface Errorlogin1 {
  Emailerror: string;
  Passworderror: string;
  isPassed: boolean;
}
export interface Login2 {
  Email: string;
  Password: string;
}
const Login1 = () => {
  const initialValues = {
    Email: "",
    Password: "",
  };
  const [values, setValues] = useState<Login2>(initialValues);
  const [errors, setErrors] = useState<Errorlogin1>({
    Emailerror: "",
    Passworderror: "",
    isPassed: false,
  });
  const handleChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const HandleCreateAccountClick = (event: any) => {
    setErrors(validation(values));
    console.log("errors", errors);
  };

  const validation = (values: any) => {
    const errors = {} as Errorlogin1;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.Email) {
      errors.Emailerror = "Please enter valid Email";
    } else if (!regex.test(values.Email)) {
      errors.Emailerror = "This is not a valid email format!";
    }
    if (!values.Password) {
      errors.Passworderror = "Please enter valid password";
    } else if (values.Password.length < 4) {
      errors.Passworderror = "password must be more than 4 characters";
    } else {
      errors.isPassed = true;
    }
    return errors;
  };

  return (
    <>
      <Div>
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
        <Div3>
          <Input
            type="text"
            name="Email"
            placeholder="Email*"
            onChange={handleChange}
          />
          {errors.Emailerror && <P> {errors.Emailerror} </P>}
        </Div3>
        <div>
          <Input
            type="text"
            name="Password"
            placeholder="Password*"
            onChange={handleChange}
          />
          {errors.Passworderror && <P> {errors.Passworderror} </P>}
        </div>
        <Button1 onClick={HandleCreateAccountClick}>Login </Button1>
        <Div4>
          <a href="#"> Forgot Your password?</a>
        </Div4>
      </Div>
    </>
  );
};

export default Login1;
