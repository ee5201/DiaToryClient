import styled from "@emotion/styled";
const UL = styled.ul`
  display: inline-block;
  margin: 10px 20px;
  @media (max-width: 768px) {
    margin: 0;
    right: 0;
    width: 200px;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: red;
  }
`;
const LI = styled.li`
  display: flex;
  list-style: none;
  margin: 10px 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;
const Qqq = styled.div`
  display: flex;
`;
export default function qqq() {
  return (
    <>
      <Qqq>
        <div>
          <UL>
            <LI>가</LI>
            <LI>나</LI>
            <LI>다</LI>
            <LI>라</LI>
            <LI>마</LI>
          </UL>
        </div>
        안녕하세요
      </Qqq>
    </>
  );
}
