import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import * as S from "./FirstPage.styles";

export default function FirstPresenter(props) {
  const [diaryRef, diaryInView] = useInView();
  const [secondDiaryRef, secondDiaryInView] = useInView();
  const [thirdRef, thirdInView] = useInView();
  const [fourthRef, fourthInView] = useInView();

  const diarySpringProps = useSpring({
    opacity: diaryInView ? 1 : 0,
    // transform: diaryInView ? "translateY(0px)" : "translateY(100px)",
  });

  const secondDiarySpringProps = useSpring({
    opacity: secondDiaryInView ? 1 : 0,
    // transform: secondDiaryInView ? "translateY(0px)" : "translateY(1000px)",
  });

  const thirdSpringProps = useSpring({
    opacity: thirdInView ? 1 : 0,
    // transform: thirdInView ? "translateX(0px)" : "translateX(100px)",
  });

  const fourthSpringProps = useSpring({
    opacity: fourthInView ? 1 : 0,
    transform: fourthInView ? "translateY(0px)" : "translateY(1000px)",
  });

  return (
    <S.Body>
      <S.Wrapper>
        <S.Container>
          <S.Nav>
            <S.NavLogo src="images/Logo.png" />
            <S.NavUl AskOpen={props.AskOpen}>
              <S.NavLi>
                <S.Nava>홈</S.Nava>
              </S.NavLi>
              <S.NavLi>
                <S.Nava>서비스</S.Nava>
              </S.NavLi>
              <S.NavLi>
                <S.Nava>고객센터</S.Nava>
              </S.NavLi>
              <S.NavLi>
                <S.Nava>로그인</S.Nava>
              </S.NavLi>
              <S.NavLi>
                <S.Nava>회원가입</S.Nava>
              </S.NavLi>
              <S.AntBar>
                <CloseOutlined onClick={props.OnClickCloseMenu} />
              </S.AntBar>
            </S.NavUl>
            <S.AntMenu onClick={props.OnClickOpenMenu}>
              <MenuOutlined />
            </S.AntMenu>
          </S.Nav>

          <S.TitleWrapperdiv>
            <S.Titlep>DiaTory</S.Titlep>
            <S.TitleWrapperH1>
              This is <S.TitleWrapperspan>DiaTory</S.TitleWrapperspan>
              <br />
              당신의 추억을 사진과 함께 기록해 보세요
            </S.TitleWrapperH1>
          </S.TitleWrapperdiv>
        </S.Container>
      </S.Wrapper>
      {/* 여기는 첫번째 */}
      <S.DiaryWrapper ref={diaryRef}>
        <animated.div style={diarySpringProps}>
          <S.Container>
            <S.DiaryRow id="row">
              <S.DiaryImgBox className="about-col">
                <S.DiaryImg src="images/diary.png" />
              </S.DiaryImgBox>
              <S.DiaryContentBox>
                <S.DiaryContentTitle>What is DiaTory?</S.DiaryContentTitle>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eligendi corrupti maiores hic velit esse laborum dolorem dicta
                  quae voluptate dolore ipsum, enim quidem pariatur omnis quis
                  saepe reiciendis vitae amet?Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Illum, ratione eveniet,
                  voluptatibus tenetur perspiciatis facilis at quibusdam nobis
                  odio laudantium ullam ab, nisi repellendus praesentium libero
                  quasi modi vitae ipsam!
                </p>
              </S.DiaryContentBox>
            </S.DiaryRow>
          </S.Container>
        </animated.div>
      </S.DiaryWrapper>

      {/* 여기는 두번째 */}
      <S.SecondDiaryWrapper ref={secondDiaryRef}>
        <animated.div style={secondDiarySpringProps}>
          <S.Container>
            <S.SecondDiaryContentBox>
              <div>
                <S.SecondDiaryTItleH1>
                  Write your <S.SecondDiaryTItleDay>Day</S.SecondDiaryTItleDay>
                  <br />
                  <S.SecondDiarySubTitle>
                    Share your
                    <S.SecondDiaryTItleLife>Life</S.SecondDiaryTItleLife>
                  </S.SecondDiarySubTitle>
                </S.SecondDiaryTItleH1>
                <S.SecondDiarySubContent>
                  당신의 하루를 기록해 보세요
                  <br />
                  <S.SecondDiarySubContentSpan>
                    그리고
                  </S.SecondDiarySubContentSpan>
                  <br /> 당신의 삶을 공유해 보세요
                </S.SecondDiarySubContent>
              </div>
            </S.SecondDiaryContentBox>
          </S.Container>
        </animated.div>
      </S.SecondDiaryWrapper>

      {/* 세번째 */}
      <S.ThirdWrapper ref={thirdRef}>
        <animated.div style={thirdSpringProps}>
          <S.Container>
            <S.ThirdRow id="row">
              <S.ThirdContentBox>
                <S.ThirdContentTitle>다양한 테마와 스티커</S.ThirdContentTitle>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eligendi corrupti maiores hic velit esse laborum dolorem dicta
                  quae voluptate dolore ipsum, enim quidem pariatur omnis quis
                  saepe reiciendis vitae amet?Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Illum, ratione eveniet,
                  voluptatibus tenetur perspiciatis facilis at quibusdam nobis
                  odio laudantium ullam ab, nisi repellendus praesentium libero
                  quasi modi vitae ipsam!
                </p>
              </S.ThirdContentBox>
              <S.ThirdImgBox className="about-col">
                <S.ThirdImg src="images/Third.gif" />
              </S.ThirdImgBox>
            </S.ThirdRow>
          </S.Container>
        </animated.div>
      </S.ThirdWrapper>

      {/* 네번째 */}
      <S.FourthDiaryWrapper ref={fourthRef}>
        <animated.div style={fourthSpringProps}>
          <S.Container>
            <S.FourthDiaryContentBox>
              <div>
                <S.FourthDiaryTItleH1>
                  Check your <S.FourthDiaryTItleDay>Day</S.FourthDiaryTItleDay>
                  <br />
                  <S.FourthDiarySubTitle>
                    Check your
                    <S.FourthDiaryTItleLife>Schedule</S.FourthDiaryTItleLife>
                  </S.FourthDiarySubTitle>
                </S.FourthDiaryTItleH1>
                <S.FourthDiarySubContent>
                  바쁜 일상 속 자신의 하루를 되돌아 보세요
                  <br />
                  <S.FourthDiarySubContentSpan>
                    캘린더를 통해 일정을 확인하세요
                  </S.FourthDiarySubContentSpan>
                </S.FourthDiarySubContent>
              </div>
            </S.FourthDiaryContentBox>
          </S.Container>
        </animated.div>
      </S.FourthDiaryWrapper>
      <div>
        <div>.</div>
      </div>
    </S.Body>
  );
}
