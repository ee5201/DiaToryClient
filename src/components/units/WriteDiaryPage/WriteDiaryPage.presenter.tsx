import * as S from "./WriteDiaryPage.styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import UploadImgContainer from "../../common/uploads/Uploads.container";

export default function WritePagePresenter(props: IWritePagePresenter) {
  const ReactQuill = dynamic(async () => await import("react-quill"), {
    ssr: false,
  });
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.BoxWrapper>
          <S.TitleWrapper>일기 작성하기</S.TitleWrapper>
          <S.WriteInputTypeWrpper>
            <S.WriteInputTypeContainer>
              <S.LabelContainer></S.LabelContainer>
              <S.SelectWrapper>
                <S.TitleInputType
                  type="text"
                  placeholder="제목을 입력해주세요"
                  onChange={props.OnChangeTitle}
                />

                <S.SelectContainer
                  placeholder="카테고리"
                  onChange={props.onchangeCategory}
                >
                  <option selected>카테고리</option>
                  {props.data?.fetchCategorys.map((el) => (
                    <option key={el.id} value={el.id}>
                      {el.name}
                    </option>
                  ))}
                </S.SelectContainer>
              </S.SelectWrapper>
            </S.WriteInputTypeContainer>
            <S.ReqctQuilWrapper>
              <S.ContentInput
                placeholder="당신의 하루를 들려주세요 오늘 하루는 어땠나요?"
                onChange={props.onChangeContents}
              />
            </S.ReqctQuilWrapper>
            <S.ButtonContainer>
              {props.fileUrls.map((el, index) => (
                <UploadImgContainer
                  onChangeImage={props.onChangeImage}
                  fileUrl={el}
                  index={index}
                />
              ))}
            </S.ButtonContainer>
            <S.TagContainer>
              <S.TagInput
                type="text"
                placeholder="#태크를 입력해주세요 ex) #여행 #슬픔 #여름"
                onChange={props.OnChaneTag}
              />
            </S.TagContainer>
            <S.SubmitButtonContainer>
              <S.SubmitButton onClick={props.OnClickSubmit}>
                등록하기
              </S.SubmitButton>
            </S.SubmitButtonContainer>
          </S.WriteInputTypeWrpper>
        </S.BoxWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
