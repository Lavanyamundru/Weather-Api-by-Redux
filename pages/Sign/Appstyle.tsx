import styled from "styled-components";
// import { Loginstyle } from "./SignupForm";
// export const Shadowed = styled.div<Loginstyle>``;
export const Container = styled.div`
  font-family: italic;
  background-color: #f0c6d4;
  width: 600px;
  height: 600px;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 300px;
  margin-top: 50px;
`;
export const Title = styled.div`
  color: #f80759;
  display: flex;
  justify-content: center;
  font-size: 15px;
`;
export const Div = styled.div`
  color: rgb(19, 13, 13);
  font-size: 16px;
  margin-left: 65px;
`;
export const Middle = styled.div`
  font-size: 10px;
  color: #0e0d0d;
  font-size: 16px;
  margin-left: 65px;
`;
export const Name = styled.div`
  font-size: 10px;
  color: #070707;
  font-size: 16px;
  margin-left: 74px;
`;
export const Parent = styled.div`
  font-size: 10px;
  color: #080808;
  font-size: 16px;
  margin-left: 68px;
`;
export const Child = styled.div`
  font-size: 10px;
  color: #080808;
  font-size: 16px;
  margin-left: 26px;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: whitesmoke;
  border: none;
  border-radius: 3px;
  width: 300px;
`;
export const P = styled.p`
  color: red;
  font-size: 15px;
`;
export const Button = styled.div`
  float: right;
  width: 100px;
  height: 25px;
  border-radius: 3px;
  background-color: #ef0a56;
  color: black;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  padding-top: 4px;
  margin-right: 40px;

  cursor: pointer;
  transition: all 0.1s;
  button:active {
    transform: translateY(2px);
  }
`;

export const Formsuccess = styled.div`
  display: flex;
  justify-content: center;

  color: #f80759;
`;

export const Label = styled.label`
  margin-left: 15px;
`;
