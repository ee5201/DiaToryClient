import styled from "@emotion/styled";

export const Body = styled.div`
  background: rgba(24, 23, 23, 0.876);
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-image: linear-gradient(
      to top,
      rgba(24, 23, 23, 0.876),
      rgba(255, 255, 255, 0)
    ),
    url("images/backimage.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export const Container = styled.div`
  padding: 20px 10%;
`;
//
// -----------------! This is a DiaTory부분 !---------------------------

export const TitleWrapperdiv = styled.div`
  margin-top: 20%;
  @media (max-width: 768px) {
    margin-top: 100%;
  }
`;

export const Titlep = styled.p`
  font-size: 50px;
`;

export const TitleWrapperH1 = styled.h1`
  font-size: 60px;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 10px;
    text-align: center;
  }
`;

export const TitleWrapperspan = styled.span`
  font-size: 60px;
  margin-top: 20px;
  color: #49a349;
`;

// ---------------!first Page what is DiaTory !----------------------------
export const DiaryWrapper = styled.div`
  padding: 20px 0;
  color: #ababab;
  /* height: 100vh; */
  scroll-snap-align: start;
  scroll-snap-stop: always;
  @media (min-width: 768px) {
    margin-top: 500px;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const DiaryRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DiaryImgBox = styled.div`
  flex-basis: 45%;
  @media (max-width: 768px) {
    flex-basis: 100%;
    text-align: center;
  }
`;

export const DiaryImg = styled.img`
  width: 400px;
  height: 600px;
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 250px;
    height: 350px;
  }
`;

export const DiaryContentBox = styled.div`
  flex-basis: 50%;
  @media (max-width: 768px) {
    flex-basis: 100%;
    text-align: center;
    margin-top: 20px;
  }
`;

export const DiaryContentTitle = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

// ------------!Write your Day styled!---------------
export const SecondDiaryWrapper = styled.div`
  padding: 30px 0;
  color: #ababab;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 500px;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;
export const SecondDiaryContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 300px;
`;
export const SecondDiaryTItleH1 = styled.h1`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
export const SecondDiaryTItleDay = styled.span`
  color: #f1f1a1;
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
export const SecondDiaryTItleLife = styled.span`
  color: #de9af3;
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
export const SecondDiarySubTitle = styled.span`
  font-size: 60px;
  margin-left: 160px;
  @media (max-width: 768px) {
    font-size: 40px;
    margin-left: 0;
  }
`;
export const SecondDiarySubContent = styled.p`
  font-size: 20px;
  margin-top: 20px;
  margin-left: 160px;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-left: 45px;
  }
`;
export const SecondDiarySubContentSpan = styled.span`
  margin-left: 77px;
  color: #db8d8d;
  @media (max-width: 768px) {
    margin-left: 57px;
  }
`;

// ------------------------!Third 세번째 페이지 !---------------------------
export const ThirdWrapper = styled.div`
  padding: 80px 0;
  color: #ababab;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  @media (min-width: 768px) {
    margin-top: 1000px;
  }
`;

export const ThirdRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ThirdImgBox = styled.div`
  flex-basis: 50%;
  @media (max-width: 768px) {
    flex-basis: 100%;
    text-align: center;
  }
`;

export const ThirdImg = styled.img`
  width: 400px;
  height: 600px;
  border-radius: 15px;
  margin-left: 140px;
  @media (max-width: 768px) {
    width: 330px;
    height: 450px;
    margin-left: 0;
    margin-top: 15px;
  }
`;

export const ThirdContentBox = styled.div`
  flex-basis: 40%;
  @media (max-width: 768px) {
    flex-basis: 100%;
    text-align: center;
  }
`;

export const ThirdContentTitle = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

// ----------------------!Fourth 네번째!---------------------

export const FourthDiaryWrapper = styled.div`
  padding: 80px 0;
  color: #ababab;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  @media (min-width: 768px) {
    margin-top: 500px;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;
export const FourthDiaryContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 300px;
`;
export const FourthDiaryTItleH1 = styled.h1`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
export const FourthDiaryTItleDay = styled.span`
  color: #f1f1a1;
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
export const FourthDiaryTItleLife = styled.span`
  color: #de9af3;
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
export const FourthDiarySubTitle = styled.span`
  font-size: 60px;
  margin-left: 160px;
  @media (max-width: 768px) {
    font-size: 40px;
    margin-left: 0;
  }
`;
export const FourthDiarySubContent = styled.p`
  font-size: 20px;
  margin-top: 20px;
  margin-left: 160px;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-left: 45px;
  }
`;
export const FourthDiarySubContentSpan = styled.span`
  margin-left: 77px;
  color: #db8d8d;
  @media (max-width: 768px) {
    margin-left: 57px;
  }
`;
