const breakpoints = ["320", "833", "834", "1439", "1440"];

export const theme = Object.freeze({
  // Colors / Example: background-color: ${p => p.theme.colors.white};
  colors: {
    mainBackground: "#F3F3F3",
    primaryGreenColor: "#103931",
    secondaryGreenColor: "#38cd3e",
    headerText: "#fbfbfb",
    titleText: "#8a8a89",
    primaryBodyText: "#11101c",
    secondaryBodyText: "rgba(17, 16, 28, 0.5)",
    buttonBorder: "rgba(251, 251, 251, 0.4)",
    photoBorder: "rgba(240, 63, 59, 0.2)",
    primaryWhite: "#FFFFFF",
    error: "#E74A3B",
    additionalGreenColor: "rgba(16, 57, 49, 0.2)",
  },

  // Animation / Example: transition: ${p => p.theme.transition.customTrans};
  transition: {
    customTrans: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // Media request / Example: @media (${ p => p.theme.mq.tablet}) {

  mq: {
    mobMin: `min-width: ${breakpoints[0]}px`, //320
    mobMax: `max-width: ${breakpoints[1]}px`, //833
    tabMin: `min-width: ${breakpoints[2]}px`, // 834
    tabMax: `max-width: ${breakpoints[3]}px`, //1439
    deskMin: `min-width: ${breakpoints[4]}px`, //1440
  },
});
