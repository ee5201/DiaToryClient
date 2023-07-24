import * as S from "./SignUpPage.styles";

export default function SignUpPagePresenter(props) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.BoxWrapper>
          <S.TitleWrapper>
            <h1>회원가입</h1>
          </S.TitleWrapper>
          <S.UserInputTypeWrpper>
            <S.UserInputTypeContainer>
              <S.Label>닉네임:</S.Label>
              <div>
                <S.UserInputType type="text" placeholder="닉네임" />
              </div>
            </S.UserInputTypeContainer>
            <S.UserInputTypeContainer>
              <S.Label>비밀번호:</S.Label>
              <div>
                <S.UserInputType type="password" placeholder="비밀번호" />
              </div>
            </S.UserInputTypeContainer>

            <S.UserInputTypeContainer>
              <S.Label>비밀번호 확인:</S.Label>
              <div>
                <S.UserInputType type="password" placeholder="비밀번호 확인" />
              </div>
            </S.UserInputTypeContainer>
          </S.UserInputTypeWrpper>
          <S.UserInputTypeWrpper>
            <S.UserInputTypeContainer>
              <S.Label>이메일:</S.Label>
              <div>
                <S.UserInputType
                  type="text"
                  placeholder="이메일"
                  onChange={props.OnChangeEmail}
                />
                <S.UserButtonType onClick={props.OnClickAuthNumberSend}>
                  인증번호 보내기
                </S.UserButtonType>
              </div>
            </S.UserInputTypeContainer>

            <S.AuthNumberContainer>
              <S.AuthLabel>
                이메일로 전송된 인증번호를 입력해주세요.
              </S.AuthLabel>
              <S.AuthNumberBox>
                <S.AuthNumberInputType
                  type="text"
                  placeholder="인증번호 6 자리 입력"
                />
                <S.AuthCount>
                  {props.count > 0
                    ? `0:${props.count.toString().padStart(2, "0")}`
                    : "0:00"}
                </S.AuthCount>
                <S.AuthNumberButtonType
                  onClick={props.CheckAuthNumber}
                  disabled={props.isButtondisabled}
                  isButtondisabled={props.isButtondisabled}
                >
                  확인
                </S.AuthNumberButtonType>
              </S.AuthNumberBox>
              <S.AuthNumberSendLabel>인증번호 재전송.</S.AuthNumberSendLabel>
            </S.AuthNumberContainer>
            <S.SignUpButtonContatiner>
              <S.SignUpButton>회원가입</S.SignUpButton>
            </S.SignUpButtonContatiner>
            <S.LoginSpanContainer>
              <S.LoginSpanMessage>이미 아이디가 있으신가요?</S.LoginSpanMessage>
              <S.LoginSpan>로그인</S.LoginSpan>
            </S.LoginSpanContainer>
          </S.UserInputTypeWrpper>
        </S.BoxWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
