import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Div = styled.div`
  height: 80px;
  width: 100%;
  background-color: #34554a;
  border: 1px solid grey;
  overflow-x: hidden;
  position: fixed;
  bottom: 0;
  font-size: 40px;
  padding-left: 50px;
  color: #efe1d0;
  font-family: Strawford;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1px;
`;
const A = styled.a`
  font-size: 15px;
  margin: 20px;
  color: #efe1d0;
  /* width: 50px;
height: 5px; */
  text-decoration: none;
  /* border-left: 1px solid; */
  text-transform: capitalize;
`;
const Span = styled.span`
  border-left: 0.5px solid #fff;
  height: 20px;
  margin-left: 15px;
`;

function Footer() {
  return (
    <>
      <Div>
        <h5>esthers </h5>

        <Span></Span>
        <A href="#"> About us</A>
        <A href="#"> contact us</A>
        <A href="#"> Blog</A>
        <Span></Span>
        <A href="#">Cookie policy</A>
        <A href="#">Terms of services</A>
        <FacebookIcon sx={{ ml: 20, color: "#EFE1D0" }} />
        <InstagramIcon />
        <LinkedInIcon />
        <A href="#"> Esthers Scandinavia AB </A>
      </Div>
    </>
  );
}

export default Footer;
