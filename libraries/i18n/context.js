import { createContext } from "react";

export const TranslationContext = createContext();

export const TranslationProvider = ({ ...props }) => {
  return (
    <TranslationContext.Provider value={props._nextI18Next}>
      {props.children}
    </TranslationContext.Provider>
  );
};
