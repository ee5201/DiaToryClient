import styled from "@emotion/styled";

export const Body = styled.div`
  background: #000;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-image: url("images/backimage.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  padding: 10px 10%;
  @media (max-width: 768px) {
    display: flex;
    padding: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const NavImg = styled.img`
  width: 140px;
  @media (max-width: 768px) {
    width: 100px;
    height: 50px;
  }
`;
export const ContentsItemWrapper = styled.ul`
  display: inline-block;
  flex-direction: column;
  margin: 10px 20px;

  @media (max-width: 768px) {
    margin: 0;
    right: 0;
    top: 0;
    position: fixed;
    height: 100vh;
    width: 200px;
    background-color: red; /* 배경 색상 추가 (테스트용) */
  }
`;

export const ContentsItemLi = styled.li`
  display: flex;
  list-style: none;
  margin: 10px 20px;

  @media (max-width: 768px) {
    display: block;
    margin: 10px;
    text-align: center; /* 가운데 정렬 */
  }
`;

export const LoginItemWrapper = styled.ul`
  margin-left: 10px;
`;

export const LoginItemLi = styled.li`
  display: inline-block;
  list-style: none;
  margin: 10px 20px;
`;
export const LoginItemLia = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  &::after {
    content: "";
    width: 0;
    height: 3px;
    background-color: white;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.5s;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ContentsItemLia = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  &::after {
    content: "";
    width: 0;
    height: 3px;
    background-color: white;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.5s;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 20px;
  }
`;

export const LoginWrapper = styled.div`
  margin-left: 100px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const AntBar = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 25px;
  }
`;

// -----------------! This is a DiaTory부분 !---------------------------

export const TitleWrapperdiv = styled.div`
  margin-top: 20%;
  @media (max-width: 768px) {
    margin-top: 100%;
  }
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
  padding: 80px 0;
  color: #ababab;
  margin-top: 200px;
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
  padding: 80px 0;
  color: #ababab;
  margin-top: 200px;
  margin-bottom: 200px;
  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;
export const SecondDiaryContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
