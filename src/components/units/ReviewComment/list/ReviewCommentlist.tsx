import { Modal, Rate } from "antd";
import * as S from "./ReviewCommentlist.styles";
import { useRecoilState } from "recoil";
import {
  DeleteId,
  DeletePassword,
  IsEdit,
  IsopenDeleteModal,
  StartRating,
} from "src/commons/stores";
import { ChangeEvent, MouseEvent, useState } from "react";
import ReviewCommentDeleteIcon from "src/components/common/hook/item/ReviewCommentDeleteIcon";
import useMutationDeleteComment, {
  DELETECOMMENT,
} from "src/components/common/hook/mutation/useMutationDeleteComment";
import { useRouter } from "next/router";
import { FETCHREVIEWBOARD } from "src/components/common/hook/queries/useQueryFetchReviewBoards";
import {
  FETCHREVIEWBOARDONE,
  useQueryFetchReviewBoardOne,
} from "src/components/common/hook/queries/useQueryFetchReviewBoardOne";
import { FETCHCOMMENTS } from "src/components/common/hook/queries/useQueryFetchReviewComments";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteCommentArgs,
} from "src/commons/types/generated/types";
import ReviewCommentUI from "../write";
export default function ReviewCommentlistListUI(props) {
  const router = useRouter();
  // const [DeleteComment] = useMutationDeleteComment();
  const [DeleteComment] = useMutation<
    Pick<IMutation, "DeleteComment">,
    IMutationDeleteCommentArgs
  >(DELETECOMMENT);
  const [Rating] = useRecoilState(StartRating);
  const [deletePassword, setdeletePassword] = useRecoilState(DeletePassword);
  // const [isOpenDeletModal, setIsOpenDeleteModal] =
  //   useRecoilState(IsopenDeleteModal);
  const [deleteId, setdeleteId] = useState("");
  const [isOpenDeletModal, setIsOpenDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  // const [isEdit, setIsEdit] = useRecoilState(IsEdit);

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setdeletePassword(event?.currentTarget.value);
  };

  const OnClickDeleteBoard = async () => {
    try {
      await DeleteComment({
        variables: {
          password: deletePassword,
          commentId: deleteId,
        },
        refetchQueries: [
          {
            query: FETCHCOMMENTS,
            variables: {
              boardId: String(router.query.DetailID),
            },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const OnClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    setdeleteId(event.currentTarget.id);
    setIsOpenDeleteModal(true);
  };

  const OnClickUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      {isOpenDeletModal && (
        <Modal visible={true} onOk={OnClickDeleteBoard}>
          <div>비밀번호 입력:</div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit ? (
        <S.Wrapper key={props.el.id}>
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
              <S.Icon
                src="/images/boardComment/list/option_update_icon.png/"
                id={props.el.id}
                onClick={OnClickUpdate}
              />
              <S.Icon
                src="/images/boardComment/list/option_delete_icon.png/"
                id={props.el.id}
                onClick={OnClickDelete}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateNum>2023-08-07</S.DateNum>
        </S.Wrapper>
      ) : (
        <ReviewCommentUI
          isEdit={isEdit}
          el={props.el}
          key={props.el.id}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
}
