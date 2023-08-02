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

export default function AfterLoginHomePageUI() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [value, setValue] = useState(() => dayjs("2017-01-25"));
  const onSelect = (newValue) => {
    setValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
            <SwiperSlide>
              <S.Card className="card">
                <S.ImageContent className="image-content">
                  <S.Overlay className="overlay"></S.Overlay>
                  <S.CardImage className="card-image">
                    <S.CardImg
                      src="images/diary.png"
                      alt=""
                      className="card-img"
                    />
                  </S.CardImage>
                </S.ImageContent>
                <S.Cardcontent className="card-content">
                  <S.Name className="name">제목입니다.</S.Name>
                  <S.Description className="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repudiandae corrupti ut nam sint enim doloribus, cum
                    incidunt, tenetur impedit blanditiis debitis praesentium
                    natus delectus illo repellendus, voluptate accusantium.
                    Unde, doloribus!
                  </S.Description>
                  {/* <S.Button className="button">view more</S.Button> */}
                  <AfterUseHomePageViewMoreButton />
                </S.Cardcontent>
              </S.Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </S.SlidContainer>
      <S.CalendarWrapper>
        <Calendar
          value={value}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
        />
      </S.CalendarWrapper>
    </S.Wrapper>
  );
}
