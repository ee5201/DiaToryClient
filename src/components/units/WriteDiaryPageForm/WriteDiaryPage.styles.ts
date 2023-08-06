import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  background-color: #ffff;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 100px;
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
  }
`;
export const TitleWrapper = styled.h1`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  margin-top: 10px;
`;

export const WriteInputTypeWrpper = styled.div`
  padding-left: 23px;
`;

export const WriteInputTypeContainer = styled.div`
  margin: 10px 0;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid black;
  padding: 10px;
  width: 870px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`;

export const SelectContainer = styled.select`
  display: flex;
  width: 100px;
  text-align: center;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  margin-right: 30px;
`;

export const ReqctQuilWrapper = styled.div`
  display: flex;
  padding-top: 10px;
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;


export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  margin-bottom: 25px;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: #afe9a2;
`;
