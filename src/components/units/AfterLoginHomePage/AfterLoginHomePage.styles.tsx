import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 100px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  flex-wrap: wrap;
  row-gap: 100px;
`;

export const SlidContainer = styled.div`
  max-width: 1120px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 40px;
`;

export const Card = styled.div`
  width: 320px;
  border-radius: 25px;
  background-color: #fff;
`;

export const SlideContent = styled.div`
  margin: 0 40px;
`;

export const CardImage = styled.div`
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;
export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  position: relative;
  padding: 25px 0;
`;
export const Cardcontent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 14px;
`;
export const Overlay = styled.span`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #a07fed;
  border-radius: 25px 25px 0 25px;
  ::before {
    content: "";
    position: absolute;
    height: 40px;
    width: 40px;
    right: 0;
    bottom: -40px;
    background-color: #a07fed;
  }
  ::after {
    content: "";
    position: absolute;
    height: 40px;
    width: 40px;
    right: 0;
    bottom: -40px;
    background-color: red;
    border-radius: 0 25px 0 0;
    background-color: #fff;
  }
`;
export const CardImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #ad6cfe;
`;

export const Name = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #707070;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  font-size: 16px;
  color: #fff;
  padding: 8px 16px;
  background-color: #4070f4;
  border-radius: 6px;
  margin: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    background: #265df2;
  }
`;

export const CalendarWrapper = styled.div`
  display: flex;
  row-gap: 10px;
  width: 80%;
  border-radius: 50px;
  row-gap: 10px;
  margin-bottom: 100px;
`;
