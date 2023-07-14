import { useState } from "react";
import FirstPresenter from "./FirstPage.presenter";

export default function FirstContainer() {
  const [AskOpen, setAskOpen] = useState(false);
  const OnClickOpenMenu = () => {
    setAskOpen(true);
  };
  const OnClickCloseMenu = () => {
    setAskOpen(false);
  };

  return (
    <FirstPresenter
      OnClickCloseMenu={OnClickCloseMenu}
      OnClickOpenMenu={OnClickOpenMenu}
      AskOpen={AskOpen}
    />
  );
}
