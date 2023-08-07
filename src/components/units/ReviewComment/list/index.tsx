import { Rate } from "antd";
import * as S from "./ReviewCommentlist.styles";
import InfiniteScroll from "react-infinite-scroller";
import useQueryFetchReviewComment from "src/components/common/hook/queries/useQueryFetchReviewComments";
import { useRecoilState } from "recoil";
import { FetchReviewBoardId } from "src/commons/stores";
import ReviewCommentlistListUI from "./ReviewCommentlist";
export default function ReviewCommentlistUI() {
  const { data, fetchMore } = useQueryFetchReviewComment();
  const [boardId] = useRecoilState(FetchReviewBoardId);
  const onLoadMore = async () => {
    await fetchMore({
      variables: {
        page: Math.ceil((data?.fetchComments.length ?? 10) / 10) + 1,
        boardId,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchComments) {
          return prev; // fetchMoreResult가 없으면 이전 데이터 그대로 반환
        }

        if (!prev.fetchComments) {
          // 이전 데이터에 fetchComments가 없으면 새로운 fetchComments를 반환
          return {
            fetchComments: [...fetchMoreResult.fetchComments],
          };
        }

        return {
          fetchComments: [
            ...prev.fetchComments,
            ...fetchMoreResult.fetchComments,
          ],
        };
      },
    });
  };
  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {data?.fetchComments.map((el) => (
        <ReviewCommentlistListUI key={el.id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
