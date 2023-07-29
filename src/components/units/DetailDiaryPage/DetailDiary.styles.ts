import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  background-color: #ffff;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 100px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const BoxWrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 920px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 30px;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black;


    
  }
`;
export const TitleSpan = styled.span`
  @media (min-width: 768px) {
    font-size: 30px;
    padding-bottom: 20px;
  }
`;

export const ImgWrapper = styled.div`
  @media (min-width: 768px) {
    justify-content: center; 
     }
`;


export const Img = styled.img`
  @media (min-width: 768px) {
    height:200px;
    margin-top: 40px;
    background: '#909aae',

    
    }
`;

export const Tag = styled.span`
  @media (min-width: 768px) {
    display: flex;
    margin-top: 10px;
    justify-content: center;  
    padding-bottom: 20px;
    border-bottom: 1px solid black;
    }
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const ContentInput = styled.textarea`
  display: flex;
  width: 870px;
  height: 400px;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  background-attachment: local;
  background-image: linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(
      white,
      white 30px,
      #ccc 30px,
      #ccc 31px,
      white 31px
    );
  line-height: 31px;
  padding: 8px 10px;
`;