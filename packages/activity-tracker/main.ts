import Bowser from "bowser"
import lifecycle, { StateChangeEventListenerOrObject } from "page-lifecycle"

if (
  Bowser.getParser((window.navigator as any)?.userAgent).getEngine().name !==
  "Blink"
) {
  console.warn("Non chromium browsers are not fully supported!")
}

// ! duplication is here because TS does not like the type declaration
export type PageState =
  | "active"
  | "passive"
  | "hidden"
  | "frozen"
  | "terminated"
export type StateChangeEvent = {
  newState: PageState
  oldState: PageState
  originalEvent: Event
}
// export interface ITracker {
//   addEventListener: (callback: (evt: StateChangeEvent) => void) => void

//   removeEventListener: (callback: (evt: StateChangeEvent) => void) => void

//   get state(): PageState

//   get pageWasDiscarded(): boolean
// }

export const tracker = {
  addEventListener: (listener: StateChangeEventListenerOrObject) => {
    console.log("b")

    lifecycle.addEventListener("statechange", listener)
  },

  removeEventListener: (listener: StateChangeEventListenerOrObject) => {
    lifecycle.removeEventListener("statechange", listener)
  },

  get state() {
    return lifecycle.state
  },

  get pageWasDiscarded() {
    return lifecycle.pageWasDiscarded
  },
}
