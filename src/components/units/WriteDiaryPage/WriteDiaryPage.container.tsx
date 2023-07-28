import { useMutation, useQuery } from "@apollo/client";
import WritePagePresenter from "./WriteDiaryPage.presenter";
import { CREATEDIARY, FETCHCATEGORYS } from "./WriteDiaryPage.queries";
import { useForm } from "react-hook-form";
import { IQuery } from "../../../commons/types/generated/types";
import { MouseEvent, useRef, useState } from "react";
import { Modal } from "antd";

export default function WriteBoardPagContainer() {
  const [categoryid, setcategoryid] = useState("");
  const [tag, setTag] = useState<string[]>([]); // 배열 타입으로 수정
  const [contents, setcontents] = useState("");
  const [title, setTitle] = useState("");
  const [fileUrls, setfileurl] = useState(["", "", ""]);
  const [CreateDiary] = useMutation(CREATEDIARY);
  const { data } = useQuery(FETCHCATEGORYS);

  const onChangeContents = (event: MouseEvent<HTMLTextAreaElement>) => {
    setcontents(event.currentTarget.value);
  };
  const onchangeCategory = (event: MouseEvent<HTMLSelectElement>) => {
    setcategoryid(event.currentTarget.value);
  };
  const OnChangeTitle = (event: MouseEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const onChangeImage = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setfileurl(newFileUrls);
  };

  const OnChaneTag = (event: MouseEvent<HTMLInputElement>) => {
    const Tags = String(event.currentTarget.value);
    const TagsSplit = Tags.split(",").map((tag) => tag.trim());
    setTag(TagsSplit); // 수정된 부분: 바로 TagsSplit 배열을 전달합니다.
  };
  const OnClickSubmit = async (data: any) => {
    try {
      const result = await CreateDiary({
        variables: {
          createDiary: {
            title: title,
            contents: contents,
            Categoryid: categoryid,
            diaryTag: tag,
            images: [...fileUrls],
          },
        },
      });
      console.log(result);
      alert("등록하였습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    //
    <WritePagePresenter
      OnClickSubmit={OnClickSubmit}
      onChangeContents={onChangeContents}
      data={data}
      onchangeCategory={onchangeCategory}
      OnChaneTag={OnChaneTag}
      OnChangeTitle={OnChangeTitle}
      onChangeImage={onChangeImage}
      fileUrls={fileUrls}
    />
  );
}
