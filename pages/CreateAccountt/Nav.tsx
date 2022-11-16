import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Nav: React.FC<{}> = () => {
  const Nav = styled.nav`
    position: fixed;
    top: 0;
    height: 90px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    z-index: 99;
    border: 1px solid transparent;
  `;
  const Img = styled.img`
    height: 35px;
    width: 35px;
    margin-left: 50px;
    margin-top: 25px;
  `;

  const Input = styled.input`
    border: 1px solid transparent;
    height: 45px;
    width: 400px;
    border-radius: 30px;
    float: right;
    margin-right: 300px;
    margin-top: 23px;
  `;

  const Button = styled.button`
    background-color: #524f54;
    height: 35px;
    border-radius: 3px;
    border: transparent;
    width: 150px;
    margin-right: -650px;
    margin-top: 23px;

    float: right;
    &:hover {
      background-color: lightgrey;
    }
  `;

  return (
    <>
      <Nav>
        <Img src="/Logo.png" alt="Logo" />
        <Input type="text" placeholder="search" className="sear"></Input>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            float: "right",
            mt: 3,
            mr: -60,
            cursor: "pointer",
            display: "flex",
            justifycontent: "center",
            ":hover": { backgroundColor: "grey" },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Button>Create account</Button>
      </Nav>
    </>
  );
};
export default Nav;
