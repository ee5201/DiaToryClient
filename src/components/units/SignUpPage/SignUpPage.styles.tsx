import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  min-width: 500px;
  padding: 30px;
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: none;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

export const UserInputTypeWrpper = styled.div`
  padding-left: 23px;
`;

export const UserInputTypeContainer = styled.div`
  margin: 10px 0;
`;

export const Label = styled.span`
  /* 오타 수정: Lable -> Label */
  font-size: 20px;
`;

export const UserInputType = styled.input`
  width: 400px;
  height: 40px;
  margin-top: 10px;
  padding: 5px; /* 입력란 내부 여백 추가 */
  border: none;
  background-color: #f0f0f0; /* 배경색 지정 */
  font-size: 15px;
  padding: 12px;
`;

export const UserButtonType = styled.button`
  display: flex;
  width: 400px;
  height: 40px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  background-color: #c4c3c3;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #e0e0e0;
  }
  &:focus {
    outline: none;
  }
`;

export const AuthNumberContainer = styled.div`
  width: 400px;
  height: 150px;
  background-color: #f0f0f0;
`;

export const AuthNumberInputType = styled.input`
  width: 200px;
  height: 40px;
  margin-top: 10px;
  padding: 13px;
  margin-right: 20px;
  font-size: 15px;
  text-align: center;
`;

export const AuthNumberBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthLabel = styled.span`
  display: flex;
  justify-content: center;
  font-size: 12px;
  padding-top: 20px;
  color: #3b3939;
`;
export const AuthNumberButtonType = styled.button`
  width: 50px;
  height: 40px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
  background-color: ${(props) =>
    props.isButtondisabled ? "black" : "#a8a6a6"};
  border: none;
  border-radius: 2px;
`;

export const AuthCount = styled.span`
  font-size: 20px;
  margin-right: 20px;
  color: red;
`;
export const AuthNumberSendLabel = styled.span`
  display: flex;
  justify-content: center;
  font-size: 15px;
  padding-top: 20px;
  color: #908f8f;
  text-decoration: underline;
`;

export const SignUpButtonContatiner = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 17px;
`;

export const SignUpButton = styled.button`
  display: flex;
  width: 300px;
  height: 40px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  background-color: #c4c3c3;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #e0e0e0;
  }
  &:focus {
    outline: none;
  }
`;

export const LoginSpanContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 17px;
  padding-top: 5px;
  font-size: 15px;
  color: #908f8f;
`;

export const LoginSpanMessage = styled.span`
  padding-right: 20px;
`;
export const LoginSpan = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
