import { TranslationProvider } from "./";
import hoistNonReactStatics from "hoist-non-react-statics";

export const withTranslation = (WrappedComponent) => {
  const AppWithTranslation = (props) => {
    const { _nextI18Next } = props.pageProps; /*as SSRConfig */
    let locale /*: string | null */ =
      _nextI18Next?.initialLocale ?? props?.router?.locale;
    const ns = _nextI18Next?.ns;

    return (
      <TranslationProvider _nextI18Next={props.pageProps._nextI18Next}>
        <WrappedComponent key={locale} {...props} />
      </TranslationProvider>
    );
  };

  return hoistNonReactStatics(AppWithTranslation, WrappedComponent);
};
