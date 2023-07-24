import { useRouter } from "next/router";
import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADERS = ["/section13/13-02-library-star"];

export default function LayOut(props) {
  const router = useRouter();
  console.log(router.asPath);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <div>{props.children}</div>
    </>
  );
}
