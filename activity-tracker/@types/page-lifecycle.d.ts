declare module "page-lifecycle" {
  export type State = "active" | "passive" | "hidden" | "frozen" | "terminated"
  export type StateChangeEventListener = (
    evt: StateChangeEvent,
  ) => void | Promise<void>
  export type StateChangeEventListenerObject = {
    handleEvent(evt: StateChangeEvent): void | Promise<void>
  }
  export type StateChangeEventListenerOrObject =
    | StateChangeEventListener
    | StateChangeEventListenerObject

  export type StateChangeEvent = {
    newState: State
    oldState: State
    originalEvent: Event
  }

  export interface Lifecycle extends EventTarget {
    state: State
    pageWasDiscarded: boolean

    addEventListener(
      type: "statechange",
      listener: StateChangeEventListenerOrObject,
    ): void

    removeEventListener(
      type: "statechange",
      callback: StateChangeEventListenerOrObject,
    ): void

    // /**
    //  * Not sure what this does
    //  */
    // addUnsavedChanges(id: object | symbol): void

    // /**
    //  * Not sure what this does
    //  */
    // removeUnsavedChanges(id: object | symbol): void
  }

  declare const lifecycle: Lifecycle
  export default lifecycle
}
