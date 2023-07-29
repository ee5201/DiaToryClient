import * as S from "./DetailDiary.styles"
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  height: '400px',
  color: '#090909',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#909aae',

};


export default function DetailDiaryPagePresenter() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.BoxWrapper>
          <S.TitleWrapper>
          <S.TitleSpan>제목:</S.TitleSpan>
          <S.TitleSpan>2023.07.29</S.TitleSpan>
          </S.TitleWrapper>
          <S.ImgWrapper>
          <Carousel afterChange={onChange}>
      <div>
      <S.Img style={contentStyle}/>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
           
          </S.ImgWrapper>
          <S.Tag>#여행</S.Tag>

          <S.ContentWrapper>
              <S.ContentInput
                placeholder="당신의 하루를 들려주세요 오늘 하루는 어땠나요?"
                
              />
            </S.ContentWrapper>
        </S.BoxWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
