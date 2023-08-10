import * as S from "./AfterLoginHomePage.styles";
import React, { useRef, useState } from "react";
import dayjs from "dayjs";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";
import { Button, Calendar, Modal } from "antd";
import AfterUseHomePageViewMoreButton from "../../common/hook/button/AfterLoginHomePageViewMore";
import { userQueryFetchDiarys } from "../../common/hook/queries/useQueryFetcthDiarys";
import { useAuth } from "../../common/hook/customs/useAuth";
import MyCalendar from "../../common/hook/item/CallendarDateRender";

export default function AfterLoginHomePageUI() {
  useAuth();

  const { data, refetch } = userQueryFetchDiarys();
  return (
    <S.Wrapper>
      <S.SlidContainer>
        <div className="cardWrapper">
          <Swiper
            slidesPerView={3}
            spaceBetween={330}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >
            {data?.fetchDairys.map((el) => (
              <SwiperSlide>
                <S.Card className="card">
                  <S.ImageContent className="image-content">
                    <S.Overlay className="overlay"></S.Overlay>
                    <S.CardImage className="card-image">
                      <S.CardImg
                        src={`https://storage.googleapis.com/${
                          el.images ? el.images[0] : "images/diary.png"
                        }`}
                        className="card-img"
                      />
                    </S.CardImage>
                  </S.ImageContent>
                  <S.Cardcontent className="card-content">
                    <S.Name className="name">{el.title}</S.Name>
                    <S.Description className="description">
                      {el.contents}
                    </S.Description>
                    <AfterUseHomePageViewMoreButton diaryId={el.id} />
                    <span>
                      {el.createAt
                        ? new Date(el.createAt).toLocaleString()
                        : ""}
                    </span>
                  </S.Cardcontent>
                </S.Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </S.SlidContainer>
      <S.CalendarWrapper>
        <MyCalendar />
      </S.CalendarWrapper>
    </S.Wrapper>
  );
}
