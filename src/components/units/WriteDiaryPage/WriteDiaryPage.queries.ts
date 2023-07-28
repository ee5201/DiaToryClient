import { gql } from "@apollo/client";

//일기 등록
export const CREATEDIARY = gql`
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

//카테고리 조회
export const FETCHCATEGORYS = gql`
  query fetchCategorys {
    fetchCategorys {
      id
      name
    }
  }
`;
