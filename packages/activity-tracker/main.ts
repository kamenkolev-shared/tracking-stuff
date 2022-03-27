// import Bowser from "bowser"
import lifecycle, { StateChangeEventListenerOrObject } from "page-lifecycle"

// if (
//   Bowser.getParser((window.navigator as any)?.userAgent).getEngine().name !==
//   "Blink"
// ) {
//   console.warn("Non chromium browsers are not fully supported!")
// }

export const tracker = {
  addEventListener: (listener: StateChangeEventListenerOrObject) =>
    lifecycle.addEventListener("statechange", listener),

  removeEventListener: (listener: StateChangeEventListenerOrObject) =>
    lifecycle.removeEventListener("statechange", listener),

  get state() {
    return lifecycle.state
  },

  get pageWasDiscarded() {
    return lifecycle.pageWasDiscarded
  },
}
