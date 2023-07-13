import * as S from "./FirstPage.styles";
import { MenuOutlined, UnorderedListOutlined } from "@ant-design/icons";
export default function FirstPresenter(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Container>
          <S.Nav>
            <S.NavImg src="images/Logo.png" />
            {props.ItemBox.map((el, index) => (
              <S.ContentsItemWrapper key={index}>
                <S.ContentsItemLi>
                  <S.ContentsItemLia href="">{el.name}</S.ContentsItemLia>
                </S.ContentsItemLi>
              </S.ContentsItemWrapper>
            ))}
            {/* <S.LoginWrapper>
              <S.LoginItemWrapper>
                <S.LoginItemLi>
                  <S.LoginItemLia>SingUp</S.LoginItemLia>
                </S.LoginItemLi>
                <S.LoginItemLi>
                  <S.LoginItemLia>Login</S.LoginItemLia>
                </S.LoginItemLi>
              </S.LoginItemWrapper>
            </S.LoginWrapper> */}
            <S.AntBar>
              <MenuOutlined />
            </S.AntBar>
          </S.Nav>
          <S.TitleWrapperdiv>
            <p>DiaTory</p>
            <S.TitleWrapperH1>
              This is a <S.TitleWrapperspan>DiaTory</S.TitleWrapperspan>
              <br /> you can write your day record here
            </S.TitleWrapperH1>
          </S.TitleWrapperdiv>
        </S.Container>
      </S.Wrapper>

      {/* 여기는 첫번째  */}
      <S.DiaryWrapper>
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
      </S.DiaryWrapper>

      {/* 여기는 두번째  */}
      <S.SecondDiaryWrapper>
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
      </S.SecondDiaryWrapper>

      {/* 세번째 */}
      <S.ThirdWrapper>
        <S.Container>
          <S.ThirdRow id="row">
            <S.ThirdContentBox>
              <S.ThirdContentTitle>What is DiaTory?</S.ThirdContentTitle>
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
      </S.ThirdWrapper>

      {/* 네번째 */}
      <S.SecondDiaryWrapper>
        <S.Container>
          <S.SecondDiaryContentBox>
            <div>
              <S.SecondDiaryTItleH1>
                Check your <S.SecondDiaryTItleDay>Day</S.SecondDiaryTItleDay>
                <br />
                <S.SecondDiarySubTitle>
                  Check your
                  <S.SecondDiaryTItleLife>Schedule</S.SecondDiaryTItleLife>
                </S.SecondDiarySubTitle>
              </S.SecondDiaryTItleH1>
              <S.SecondDiarySubContent>
                바쁜 일상 속 자신의 하루를 되돌아 보세요
                <br />
                <S.SecondDiarySubContentSpan>
                  캘린더를 통해 일정을 확인하세요
                </S.SecondDiarySubContentSpan>
              </S.SecondDiarySubContent>
            </div>
          </S.SecondDiaryContentBox>
        </S.Container>
      </S.SecondDiaryWrapper>
      <div>
        <div>.</div>
      </div>
    </S.Body>
  );
}
