import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  min-width: 500px;
  padding: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

export const LoginUserInputTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 23px;
`;

export const LoginUserInputTypeContainer = styled.div`
  margin: 10px 0;
`;

export const LoginUserInputType = styled.input`
  width: 400px;
  height: 40px;
  margin-top: 10px;
  padding: 5px;
  border: none;
  background-color: #f0f0f0;
  font-size: 15px;
`;

export const LoginButtonType = styled.button`
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

export const SignUpButton = styled(LoginButtonType)`
  width: 300px;
`;

export const SignUpButtonContatiner = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 17px;
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

export const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5px;
  font-size: 15px;
  color: #908f8f;

  span {
    margin-bottom: 5px;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-left: 6px;
`;

export const BackVideo = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
