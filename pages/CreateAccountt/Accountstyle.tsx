import styled from "styled-components";
export const Wrapper = styled.div`
  width: 550px;
  height: 850px;
  border: 1px solid rgb(238, 238, 238);
  background-color: white;
  margin-top: -40px;
  margin-left: 370px;
  /* display:flex; 
  justify-content:center; */
  align-items: center;
`;
export const Div = styled.div`
  display: flex;
  margin-left: 45px;
  margin-right: 45px;
`;
export const ParentDiv = styled.div`
  flex: 1;
`;
export const Button = styled.button`
  height: 50px;
  width: 230px;
  border-radius: 3px;
  border: 1px solid rgb(238, 238, 238);
  color: black;
  cursor: pointer;
  background-color: #bababa;
  margin-top: 40px;
  font-family: Inter, sans-serif;
  font-weight:200;
  opacity:1;
  &:focus {
    background-color: white;
    color:#929090;
  }
`;
export const ButtonDiv1 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 200px;
  background-color: #34554a;
  border: 1px solid rgb(160, 158, 158);
  justify-content: center;
  display: flex;
  cursor: pointer;
  padding-top: 8px;
  margin-left: 200px;
  margin-top: 15px;
  &:visited {
    background-color: white;
  }
`;
export const ButtonDiv2 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 200px;
  background-color: white;
  border: 1px solid rgb(238, 238, 238);
  text-align: center;
  cursor: pointer;
  padding-top: 8px;
  float: right;
  margin-top: -40px;
  margin-right: 200px;
  &:visited {
    background-color: #34554a;
  }
`;
export const ButtonDiv3 = styled.div`
  border: 1px solid rgb(238, 238, 238);
  cursor: pointer;
  width: 472px;
  height: 40px;
  margin-top: 25px;
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
export const P = styled.p`
  color: red;
  font-size: 13px;
  margin-left: 35px;
`;
export const ChildDiv = styled.div`
  font-size: 15px;
  margin-left: 40px;
  margin-right: 20px;
  margin-top: 13px;
  color: grey;
`;
export const Div1 = styled.div`
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(66, 103, 178);
  width: 470px;
  height: 40px;
  margin-left: 40px;
  margin-top: 20px;
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
export const Div2 = styled.div`
  width: 472px;
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
export const Input = styled.input`
  width: 472px;
  height: 40px;
  border: 1px solid rgb(238, 238, 238);
  margin-top: 10px;
  margin-left: 37px;
  border-radius: 3px;
  padding-left: 13px;
  padding-top: 5px;
  background-color: white;
`;
export const Pre = styled.div`
  font-size: 15px;
  margin-left: 40px;
  margin-right: 20px;
  margin-top: 15px;
  color: grey;
`;
export const Para = styled.div`
  font-size: 16px;
  margin-left: 40px;
  margin-right: 20px;
  margin-top: 13px;
  color: grey;
  text-align: center;
`;
export const Div3 = styled.div`
  width: 472px;
  height: 40px;
  border: 1px solid rgb(238, 238, 238);
  margin-top: 13px;
  margin-left: 37px;
  border-radius: 3px;
  text-align: center;
  padding-top: 5px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
`;
export const ContentDiv = styled.div`
  margin-top: 20px;
`;
export const Line = styled.div`
  background-color: rgb(238, 238, 238);
  max-width: 95%;
  height: 1px;
  margin: 20px 0px;
`;
export const Label = styled.div`
  font-size: 15px;
  margin-left: 35px;
`;
export const Form = styled.div`
  height: 1650px;
  width: 549px;
  border: 1px solid rgb(238, 238, 238);
  background-color: white;
  margin-top: 10px;
  border-top: transparent;
`;
export const Select = styled.select`
  width: 472px;
  height: 40px;
  border: 1px solid rgb(238, 238, 238);
  margin-top: 10px;
  margin-left: 37px;
  border-radius: 3px;
  padding-left: 13px;
  padding-top: 5px;
  background-color: white;
  color: grey;
`;
export const Container = styled.div`
  margin-left: 50px;
`;
// export const A = styled.a`
//   color: rgb(66, 103, 178);
//   font-size: 14px;
//   cursor: pointer;
//   text-decoration: none;
// `;
export const Div5 = styled.div`
  margin-left: 0px;
  &:visited {
    background-color: #34554a;
  }
  &:visited {
    background-color: white;
  }
`;
// export const Line1 = styled.div`
//   /* content: "";
//   background-color: rgb(242, 244, 244)
//     width: calc(100% - 40px);
//     height: 2px;
//     position: absolute;
//     top: 0px;
//     bottom: 0px;
//     left: 60px;
//     margin: auto;
//     z-index: 1; */
//   background-color: rgb(238, 238, 238);
//   max-width: 15%;
//   height: 1px;
//   margin-top: 100px;
// `;
