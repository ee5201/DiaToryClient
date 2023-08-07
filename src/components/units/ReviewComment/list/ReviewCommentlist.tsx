import { Rate } from "antd";
import * as S from "./ReviewCommentlist.styles";
import { useRecoilState } from "recoil";
import { StartRating } from "src/commons/stores";
export default function ReviewCommentlistListUI(props) {
  const [Rating] = useRecoilState(StartRating);
  return (
    <S.Wrapper>
      <S.FlexWrapper>
        <S.MainWrapper>
          <S.UserBox>
            <S.UserName>{props.el.NickName}</S.UserName>
            <S.RateDiv>
              <Rate disabled value={Rating} />
            </S.RateDiv>
          </S.UserBox>
          <S.Contents>{props.el.contents}</S.Contents>
        </S.MainWrapper>
        <S.OptionWrapper>
          <S.Icon src="/images/boardComment/list/option_update_icon.png/" />
          <S.Icon src="/images/boardComment/list/option_delete_icon.png/" />
        </S.OptionWrapper>
      </S.FlexWrapper>
      <S.DateNum>2023-08-07</S.DateNum>
    </S.Wrapper>
  );
}
