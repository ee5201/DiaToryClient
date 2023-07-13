import { Global } from "@emotion/react";
import "../styles/globals.css";
import { globalStyles } from "../src/common/styles/globalStyles";
import ApolloSetting from "../src/components/common/apollo";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </>
      </ApolloSetting>
    </div>
  );
}
