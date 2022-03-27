export const pingInterval = 1000

export const FEEvents = {
  initVisible: "APP_INIT & APP_VISIBLE",
  initHidden: "APP_INIT",

  pageHide: "APP_OBSCURED",
  pageVisible: "APP_VISIBLE",
  windowBlur: "APP_OBSCURED",
  windowFocus: "APP_VISIBLE",

  windowUnload: "APP_CLOSED", // ? useless?
} as const
export type FEEvent = typeof FEEvents[keyof typeof FEEvents]

export const endpoints = ["ws", "log", "list", "clearList"] as const
export type Endpoint = typeof endpoints[number]

