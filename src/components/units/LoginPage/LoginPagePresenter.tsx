import * as S from "./LoginStyles";
export default function LoginPagePresenter() {
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
              <div>
                <S.LoginUserInputType type="text" placeholder="이메일" />
              </div>
            </S.LoginUserInputTypeContainer>
          </S.LoginUserInputTypeWrapper>
          <S.LoginUserInputTypeWrapper>
            <S.LoginUserInputTypeContainer>
              <div>
                <S.LoginUserInputType type="password" placeholder="비밀번호" />
              </div>
            </S.LoginUserInputTypeContainer>
          </S.LoginUserInputTypeWrapper>
          <S.SignUpButtonContatiner>
            <S.SignUpButton>로그인</S.SignUpButton>
          </S.SignUpButtonContatiner>
          <S.LoginSpanContainer>
            <S.LoginSpanMessage>아직 회원이 아니신가요?</S.LoginSpanMessage>
            <S.LoginSpan>회원가입</S.LoginSpan>
          </S.LoginSpanContainer>
          <S.LoginSpanContainer>
            <S.LoginSpanMessage>비밀번호를 잊어버리셨나요?</S.LoginSpanMessage>
            <S.LoginSpan>비밀번호 찾기</S.LoginSpan>
          </S.LoginSpanContainer>
          <S.LoginSpanContainer>
            <S.SocialLoginContainer>
              <span>SNS 로그인하기</span>
              <div>
                <S.Img src="images/google.png" />
                <S.Img src="images/kakao.png" />
              </div>
            </S.SocialLoginContainer>
          </S.LoginSpanContainer>
        </S.BoxWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
