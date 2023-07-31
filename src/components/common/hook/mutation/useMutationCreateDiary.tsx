import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationCreateDiaryArgs } from "../../../../commons/types/generated/types";

 const CREATEDIARY = gql`
  mutation CreateDiary($createDiary: CreateDiaryInput!) {
    CreateDiary(createDiary: $createDiary) {
      id
      title
      contents
      diaryTags {
        id
      }
      images
    }
  }
`;

export const useMutationCreateDiary = ():typeof createDiary=>{
  const createDiary = useMutation<Pick<IMutation,"CreateDiary">,IMutationCreateDiaryArgs>(CREATEDIARY)

  return createDiary
  
}