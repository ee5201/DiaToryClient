import { useState } from "react";
import * as S from "./Header.styles";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useMoveToPage } from "../../hook/customs/useMoveToPage";
import { useRecoilState } from "recoil";
import { IsvaildLogin } from "../../../../commons/stores";
import OnClickLogoutButton from "../../hook/customs/useOnClickLogOut";

export default function LayoutHeader(props) {
  const [AskOpen, setAskOpen] = useState(false);
  const { onClickMoveToPage } = useMoveToPage();
  const OnClickOpenMenu = () => {
    setAskOpen(true);
  };
  const OnClickCloseMenu = () => {
    setAskOpen(false);
  };

  const { OnClickLogout } = OnClickLogoutButton();
  const [isvaildlogin, setisvaildlogin] = useRecoilState(IsvaildLogin);

  return (
    <S.Wrapper>
      <S.Nav>
        <S.NavUl AskOpen={AskOpen}>
          <S.NavLi>
            <S.Nava onClick={onClickMoveToPage("/AfterLoginHomePage")}>
              홈
            </S.Nava>
          </S.NavLi>
          <S.NavLi>
            <S.Nava>검색</S.Nava>
          </S.NavLi>
          <S.NavLi>
            <S.Nava onClick={onClickMoveToPage("/writeDiaryPage")}>
              일기 작성하기
            </S.Nava>
          </S.NavLi>
          <S.NavLi>
            <S.Nava onClick={onClickMoveToPage("/ReivewPage")}>
              페이지리뷰
            </S.Nava>
          </S.NavLi>
          <S.NavTitleLi>
            <S.NavTitle>DiaTory</S.NavTitle>
          </S.NavTitleLi>
          <S.UserLi>
            <S.UserNava
              onClick={
                isvaildlogin ? OnClickLogout : onClickMoveToPage("/loginPage")
              }
            >
              {isvaildlogin ? "로그아웃" : "로그인"}
            </S.UserNava>
          </S.UserLi>
          <S.UserLi>
            <S.UserNava onClick={onClickMoveToPage("/SignUpPage")}>
              회원가입
            </S.UserNava>
          </S.UserLi>

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
