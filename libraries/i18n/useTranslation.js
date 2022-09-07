import { useContext } from "react";
import { TranslationContext } from "./context";
import { warnOnce } from "./utils";

export const useTranslation = (ns) => {
  const i18n = useContext(TranslationContext);

  if (!i18n.initialI18nStore[ns])
    return warnOnce(`The namespace ${[ns]} isn't found.`);
  const getT = (key) => {
    if (!i18n.initialI18nStore[ns][key])
      return warnOnce(`The key ${[key]} isn't found.`);
    return i18n.initialI18nStore[ns][key];
  };

  const t = (key) => getT(key);

  const ret = [t, i18n];
  ret.t = t;
  ret.i18n = i18n;

  return ret;
};
