import { ChangeEvent, useState } from "react";
import SignUpPagePresenter from "./SignUpPage.presenter";
import { useMutation } from "@apollo/client";
import { CHECKEMAIL } from "./SignUpPage.queries";

export default function SignUpPageContainer() {
  const [Email, setEmail] = useState("");
  const [count, setCount] = useState(30);
  const [isButtondisabled, setisButtondisabled] = useState(false);

  const [SendEmail] = useMutation(CHECKEMAIL);

  const OnClickAuthNumberSend = () => {
    setCount(30);
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(intervalId);
    }, 30000);
  };

  const CheckAuthNumber = () => {
    if (count !== 0) {
      setisButtondisabled(true);
    } else {
      setisButtondisabled(false);
    }
  };

  const OnChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setEmail(event.currentTarget.value);
  };
  const OnClickSendAuthNumber = async () => {
    try {
      const result = await SendEmail({
        variables: {
          email: Email,
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    //
    <>
      <SignUpPagePresenter
        OnChangeEmail={OnChangeEmail}
        // OnClickSendAuthNumber={OnClickSendAuthNumber}
        OnClickAuthNumberSend={OnClickAuthNumberSend}
        count={count}
        CheckAuthNumber={CheckAuthNumber}
        isButtondisabled={isButtondisabled}
      />
    </>
  );
}
