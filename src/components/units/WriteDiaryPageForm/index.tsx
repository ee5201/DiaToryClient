import * as S from "./WriteDiaryPage.styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import UploadImgContainer from "../../common/uploads/Uploads.container";
import { useMoveToPage } from "../../common/hook/customs/useMoveToPage";
import { useMutationCreateDiary } from "../../common/hook/mutation/useMutationCreateDiary";
import { Form } from "react-hook-form";
import { useOnClickSubmitCreateDiary } from "../../common/hook/customs/useOnClickSubmitCreateDiary";
import CreateDiaryTitleInput from "../../common/inputs/CreateDiaryTitleInput";
import CreateDiaryCategorySelected from "../../common/selected/CreateDiaryCategory";
import CreateDiaryContentsInput from "../../common/inputs/CreateDiaryContentsInput";
import useUploadFile from "../../common/hook/customs/UseUploadFile/useUploadFIle";
import CreateDiaryTagInput from "../../common/inputs/CreateDiaryTag";
import { useAuth } from "../../common/hook/customs/useAuth";

export default function WritePageUI() {
  const { OnClickSubmit } = useOnClickSubmitCreateDiary();
  const { onChangeImage, fileUrls } = useUploadFile();
  useAuth();

  return (
    <S.Wrapper>
      <S.Container>
        <S.BoxWrapper>
          <S.TitleWrapper>일기 작성하기</S.TitleWrapper>
          <S.WriteInputTypeWrpper>
            <S.WriteInputTypeContainer>
              <S.SelectWrapper>
                <CreateDiaryTitleInput />
                <CreateDiaryCategorySelected />
              </S.SelectWrapper>
            </S.WriteInputTypeContainer>
            <S.ReqctQuilWrapper>
              <CreateDiaryContentsInput />
            </S.ReqctQuilWrapper>
            <S.ButtonContainer>
              {fileUrls.map((el, index) => (
                <UploadImgContainer
                  onChangeImage={onChangeImage}
                  fileUrl={el}
                  index={index}
                />
              ))}
            </S.ButtonContainer>
            <S.TagContainer>
              <CreateDiaryTagInput />
            </S.TagContainer>
            <S.SubmitButtonContainer>
              <S.SubmitButton onClick={OnClickSubmit}>등록하기</S.SubmitButton>
            </S.SubmitButtonContainer>
          </S.WriteInputTypeWrpper>
        </S.BoxWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
