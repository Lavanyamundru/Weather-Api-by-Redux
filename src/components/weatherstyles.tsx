import styled from "styled-components";

export const Div = styled.div`
  height: 300px;
  width: 500px;
  border: 1px solid black;
  background-color: ${(props) =>
    props.dayTime === "Morning"
      ? "green"
      : props.dayTime === "Afternoon"
      ? "yellow"
      : "blue"};
  border-radius: 5px;
  margin-left: 30px;
  margin-top: 30px;
  color: white;
  font-weight: bold;
  padding-left: 20px;
`;

export const Button = styled.button`
  background-color: #2b2c2b;
  height: 48px;
  color: white;
  margin-left: 300px;
  top: 10px;
  display: flex;
  width: 70px;
  justify-content: center;
  padding-top: 15px;
  border-radius: 3px;
  margin-top: -50px;
`;
export const Para = styled.p`
  width: 500px;
  background-color: grey;
  margin-top: -1px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-left: -21px;
  text-align: center;
  height: 30px;
`;
export const Span = styled.span`
  float: right;
  padding-right: 30px;
`;
export const H3 = styled.h3`
  color: black;
  margin-left: 30px;
  margin-top: 40px;
`;
