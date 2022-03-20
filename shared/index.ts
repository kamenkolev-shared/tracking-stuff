export const pingInterval = 1000

export const events = {
  initVisible: "APP_INIT & APP_VISIBLE",
  initHidden: "APP_INIT",

  pageHide: "APP_OBSCURED",
  pageVisible: "APP_VISIBLE",
  windowBlur: "APP_OBSCURED",
  windowFocus: "APP_VISIBLE",

  windowUnload: "APP_CLOSED", // ? useless?
} as const
export type event = typeof events[keyof typeof events]