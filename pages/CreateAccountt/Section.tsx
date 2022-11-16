import React, { useState } from "react";
import styled from "styled-components";
import Account from "./Account";
import DropBox from "./Dropbox";
import Login from "./Login";

const Div = styled.div`
  height: 2300px;
  overflow-y: hidden;
`;
const Pre = styled.div`
  height: 230px;
  width: 100%;
  background-color: #34554a;
  font-size: 40px;
  /* padding-left: 550px; */
  color: rgb(239, 225, 208);
  font-family: Strawford, "Lexend Deca", Inter, sans-serif;
  border: 1px solid black;
  font-weight: 500;
  margin-top: 90px;
  display: flex;
  justify-content:center;
  align-items: center;
`;

const Section = () => {
  const [needRedirection, setneedRedirection] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  return (
    <>
      {!isLogin ? (
        <Div>
          <Pre> Create account</Pre>
          {needRedirection ? (
            <DropBox setisLogin={setisLogin}></DropBox>
          ) : (
            <Account setneedRedirection={setneedRedirection} />
          )}
        </Div>
      ) : (
        <Div>
          <Pre> Login</Pre>
          <Login></Login>
        </Div>
      )}
    </>
  );
};

export default Section;
