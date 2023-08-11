import LoginPageLogin from "../../common/hook/button/LoginPageLogin";
import { useMoveToPage } from "../../common/hook/customs/useMoveToPage";
import useOnClickLoginButton from "../../common/hook/customs/useOnClickLogin";
import LoginPageEmailInput from "../../common/inputs/LoginPageEmail";
import LoginPagePasswordInput from "../../common/inputs/LoginPagePassword";
import { wrapAsync } from "../../common/libraries/asyncFunc";
import * as S from "./LoginStyles";
export default function LoginPageUI() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.BackVideo autoPlay loop muted playsInline>
        <source src="images/diary.mp4" type="video/mp4" />
      </S.BackVideo>
      <S.Container>
        <S.BoxWrapper>
          <S.TitleWrapper>
            <h1>로그인</h1>
          </S.TitleWrapper>
          <S.LoginUserInputTypeWrapper>
            <S.LoginUserInputTypeContainer>
              {/* 로그인 */}
              <LoginPageEmailInput />
              {/* 로그인 */}
            </S.LoginUserInputTypeContainer>
          </S.LoginUserInputTypeWrapper>
          <S.LoginUserInputTypeWrapper>
            <S.LoginUserInputTypeContainer>
              {/* 비밀번호 */}
              <LoginPagePasswordInput />
              {/* 비밀번호 */}
            </S.LoginUserInputTypeContainer>
          </S.LoginUserInputTypeWrapper>
          <S.SignUpButtonContatiner>
            <LoginPageLogin />
          </S.SignUpButtonContatiner>
          <S.LoginSpanContainer>
            <S.LoginSpanMessage>아직 회원이 아니신가요?</S.LoginSpanMessage>
            <S.LoginSpan onClick={onClickMoveToPage("/SignUpPage")}>
              회원가입
            </S.LoginSpan>
          </S.LoginSpanContainer>
          <S.LoginSpanContainer>
            <S.LoginSpanMessage>비밀번호를 잊어버리셨나요?</S.LoginSpanMessage>
            <S.LoginSpan>비밀번호 찾기</S.LoginSpan>
          </S.LoginSpanContainer>
          <S.LoginSpanContainer>
            <S.SocialLoginContainer>
              <div>
                <a href="http://localhost:3000/login/google">
                  <S.Img src="images/google.png" />
                </a>
                <a href="http://localhost:3000/login/kakao">
                  <S.Img src="images/kakao.png" />
                </a>
                <a href="http://localhost:3000/login/naver">
                  <S.Img src="images/naver.png" />
                </a>
              </div>
            </S.SocialLoginContainer>
          </S.LoginSpanContainer>
        </S.BoxWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
