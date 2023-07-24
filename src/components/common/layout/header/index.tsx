import { useState } from "react";
import * as S from "./Header.styles";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

export default function LayoutHeader(props) {
  const [AskOpen, setAskOpen] = useState(false);
  const OnClickOpenMenu = () => {
    setAskOpen(true);
  };
  const OnClickCloseMenu = () => {
    setAskOpen(false);
  };
  return (
    <S.Wrapper>
      <S.Nav>
        <S.NavLogo src="images/Logo.png" />
        <S.NavTitle>DiaTory</S.NavTitle>
        <S.NavUl AskOpen={AskOpen}>
          <S.NavLi>
            <S.Nava>홈</S.Nava>
          </S.NavLi>
          <S.NavLi>
            <S.Nava>서비스</S.Nava>
          </S.NavLi>
          <S.NavLi>
            <S.Nava>고객센터</S.Nava>
          </S.NavLi>
          <S.UserLi>
            <S.Nava>로그인</S.Nava>
          </S.UserLi>
          <S.NavLi>
            <S.Nava>회원가입</S.Nava>
          </S.NavLi>

          <S.AntBar>
            <CloseOutlined onClick={OnClickCloseMenu} />
          </S.AntBar>
        </S.NavUl>
        <S.AntMenu onClick={OnClickOpenMenu}>
          <MenuOutlined />
        </S.AntMenu>
      </S.Nav>
    </S.Wrapper>
  );
}
