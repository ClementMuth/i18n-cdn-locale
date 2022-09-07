import React, { useEffect } from "react";
import { useTranslation } from "/libraries/i18n";

export const Content = function () {
  const { t, i18n } = useTranslation(["home"]);

  return (
    <>
      <div>{t("headTitle")}</div>
    </>
  );
};
