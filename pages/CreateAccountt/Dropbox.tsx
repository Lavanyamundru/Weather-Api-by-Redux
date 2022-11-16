import React from "react";
import styled from "styled-components";

import { useRouter } from "next/router";
const Div = styled.div`
  width: 550px;
  height: 300px;
  border: 1px solid rgb(238, 238, 238);
  background-color: white;
  margin-top: -45px;
  margin-left: 360px;
`;
const Button = styled.button`
  height: 40px;
  width: 100px;
  justify-content: center;
  background-color: #34554a;
  color: white;
  font-size: 14px;
  margin-left: 225px;
  border-radius: 3px;
  border: 1px solid black;
  margin-top: 20px;
`;
const P = styled.p`
  margin-top: 50px;
  margin-left: 60px;
  margin-right: 50px;
  font-size: 17px;
  font-family: Strawford;
  font-weight: 400;
`;
const P1 = styled.p`
  margin-top: 15px;
  margin-left: 60px;
  margin-right: 50px;
  font-size: 17px;
`;

const Dropbox = (props: any) => {
  const router = useRouter();
  return (
    <>
      <Div>
        <P>
          You re almost there.Please check Email to verify Your email address.
          If you cant find it,you may need to check Your spam folder
        </P>
        <P1>Verified ? Amazing ! Now you re to log in and get started</P1>
        <Button onClick={() => props.setisLogin(true)}>Login</Button>
      </Div>
    </>
  );
};

export default Dropbox;
