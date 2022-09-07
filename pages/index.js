import Head from "next/head";
import React, { useEffect } from "react";
import { Content } from "../components/Content.js";
import { serverSideTranslation, useTranslation } from "/libraries/i18n";

const Home = (props) => {
  const { t } = useTranslation(["home"]);

  return (
    <>
      <Head>
        <title>{t("headTitle")}</title>
      </Head>
      <Content />
    </>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: await serverSideTranslation(locale, ["home"]),
});

export default Home;
