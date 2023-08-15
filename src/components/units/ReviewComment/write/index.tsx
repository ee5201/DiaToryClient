import { Rate } from "antd";
import * as S from "./commentwirte.styles";
import { ReviewCommentWriteInput } from "src/components/common/inputs/ReviewCommentWriteInput";
import { ReviewCommentPasswordInput } from "src/components/common/inputs/ReviewCommentpasswordInput";
import ReviewCommentTextArea from "src/components/common/inputs/ReviewCommentTextarea";
import ReviewCommentSubmitButton from "src/components/common/hook/button/ReviewCommentSubmitButton";
import { useRecoilState } from "recoil";
import { StartRating } from "src/commons/stores";
export default function ReviewCommentUI(props) {
  const [_, setValue] = useRecoilState(StartRating);
  return (
    <S.Wrapper>
      <S.Linethrough></S.Linethrough>
      <S.TitleBox>
        <S.Title>{props.isEdit ? "수정" : "댓글"}</S.Title>
      </S.TitleBox>
      <S.InputBox>
        <ReviewCommentWriteInput />
        <ReviewCommentPasswordInput />
        <Rate allowHalf onChange={setValue} />
      </S.InputBox>
      <S.InputContentBox>
        <ReviewCommentTextArea />
        <S.BottomWrapper>
          <S.LineNumber>/100</S.LineNumber>
          <ReviewCommentSubmitButton
            isEdit={props.isEdit}
            el={props.el}
            setIsEdit={props.setIsEdit}
          />
        </S.BottomWrapper>
      </S.InputContentBox>
    </S.Wrapper>
  );
}
