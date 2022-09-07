import axios from "axios";

export const serverSideTranslation = async (locale, ns) => {
  let initialI18nStore = {};

  await Promise.all(
    ns.map(async (ns) => {
      initialI18nStore[ns] = (
        await axios(
          `https://api.locize.app/${process.env.API_KEY}/latest/${locale}/${ns}`
        )
      ).data;
    })
  );

  const _nextI18Next = {
    initialI18nStore: initialI18nStore,
    initialLocale: locale,
    ns: ns,
  };

  return { _nextI18Next };
};
