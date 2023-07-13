import FirstPresenter from "./FirstPage.presenter";

export default function FirstContainer() {
  const ItemBox = [
    { name: "Home" },
    { name: "Service" },
    { name: "CS" },
    { name: "로그인" },
    { name: "회원가입" },
  ];
  return <FirstPresenter ItemBox={ItemBox} />;
}
