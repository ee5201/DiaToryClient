import styled from "@emotion/styled";
export const Wrapper = styled.div`
  display: flex;
  background-color: rgb(248, 228, 139);
  border: none;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const NavLogo = styled.img`
  width: 140px;
  @media (max-width: 768px) {
    width: 100px;
    height: 50px;
  }
  @media (min-width: 1024px) {
    display: flex;
    margin-left: 210px;
  }
`;

export const NavTitle = styled.div`
  font-size: 30px;
`;

export const NavUl = styled.ul`
  display: inline-block;
  margin: 10px 20px;
  @media (max-width: 768px) {
    margin: 0;
    right: ${(props) => (props.AskOpen ? "0" : "-200px")};
    top: 0;
    position: fixed;
    height: 50vh;
    width: 200px;
    padding-top: 50px;
    border-radius: 5px;
    background: linear-gradient(to bottom, #5f6264, rgba(107, 170, 233, 0));
    z-index: 2;
  }
  @media (min-width: 1024px) {
    display: flex;
    margin-left: 120px;
  }
`;

export const NavLi = styled.li`
  display: inline-block;
  list-style: none;
  margin: 10px 20px;

  @media (max-width: 768px) {
    display: block;
    margin: 27px;
    text-align: center;
  }
  @media (min-width: 1024px) {
    display: flex;
    /* margin-left: 130px; */
  }
`;

export const UserLi = styled.li`
  display: inline-block;
  list-style: none;
  margin: 10px 20px;

  @media (max-width: 768px) {
    display: block;
    margin: 27px;
    text-align: center;
  }
  @media (min-width: 1024px) {
    display: flex;
    margin-left: 160px;
  }
`;

export const Nava = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  cursor: pointer;
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
  }
`;

export const AntBar = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 25px;
    cursor: pointer;
    position: absolute;
    top: 25px;
    left: 25px;
  }
`;
export const AntMenu = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 25px;
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 25px;
  }
`;
