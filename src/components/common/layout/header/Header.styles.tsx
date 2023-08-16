import styled from "@emotion/styled";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffff;
  border: none;
  border-top: 2px solid black;
  border-bottom: 1px solid black;
  position: relative;
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
`;

export const NavTitle = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
    margin-left: 100px;
    margin-right: 370px;
    font-size: 30px;
  }
`;

export const NavUl = styled.ul`
  display: inline-block;
  margin: 3px 10px;
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
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLi = styled.li`
  display: inline-block;
  list-style: none;
  margin: 10px 40px;

  @media (max-width: 768px) {
    display: block;
    margin: 27px;
    text-align: center;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavTitleLi = styled.li`
  display: inline-block;
  list-style: none;
  margin: 10px 20px;

  @media (max-width: 768px) {
    display: block;
    margin: 27px;
    text-align: center;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
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
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    /* justify-content: space-between; */
    /* margin-left: 70px; */
  }
`;

export const Nava = styled.a`
  color: #040404;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    width: 0;
    height: 3px;
    background-color: #080808;
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
    @media (min-width: 768px) {
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
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
  }
`;
export const UserNava = styled.a`
  color: #040404;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    width: 0;
    height: 3px;
    background-color: #080808;
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
    @media (min-width: 768px) {
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
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
