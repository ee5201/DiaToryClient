import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  background-color: #f4fbd9;
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
  border: none;
  @media (min-width: 768px) {
    width: 900px;
  }
`;
export const TitleWrapper = styled.h1`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
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
`;

export const TitleInputType = styled.input`
  width: 650px;
  height: 40px;
  margin-top: 10px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid green;
  outline: none;
  font-size: 15px;
  padding: 12px;
  font-size: 20px;
  display: flex;
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
`;
export const ContentInputType = styled.input`
  width: 870px;
  height: 200px;
  margin-top: 10px;
  padding: 5px;
  border-bottom: 1px solid green;
  outline: none;
  font-size: 15px;
  padding: 12px;
  font-size: 20px;
  display: flex;
  text-align: center;
`;
export const ReqctQuilWrapper = styled.div`
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const TagInput = styled.input`
  display: flex;
  text-align: center;
  width: 400px;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 16px;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: #afe9a2;
`;
