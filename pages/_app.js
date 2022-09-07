import Head from "next/head";
import { withTranslation } from "/libraries/i18n";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next-i18next</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default withTranslation(MyApp);
