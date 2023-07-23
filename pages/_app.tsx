import { Global } from "@emotion/react";
import "../styles/globals.css";
import ApolloSetting from "../src/components/common/apollo";
import { globalStyles } from "../src/commons/styles/globalStyles";
import LayOut from "../src/components/common/layout";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <LayOut>
            <Component {...pageProps} />
          </LayOut>
        </>
      </ApolloSetting>
    </div>
  );
}
