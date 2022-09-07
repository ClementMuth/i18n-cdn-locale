export const warn = (...args) => {
  if (console && console.warn) {
    if (typeof args[0] === "string") args[0] = `react-i18next:: ${args[0]}`;
    console.warn(...args);
  }
};

const alreadyWarned = {};
export const warnOnce = (...args) => {
  if (typeof args[0] === "string" && alreadyWarned[args[0]]) return;
  if (typeof args[0] === "string") alreadyWarned[args[0]] = new Date();
  warn(...args);
};
