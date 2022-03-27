import { FEEvents, pingInterval } from "../shared/index.js"
import { userID } from "./shared.js"
import { debouncePerArg } from "./utils.js"
import {
  FEEvent,

} from "../shared"
import {
  wsURL as _wsURL,
  apiURL,
} from "./shared"

// +?userID=${userID}
// TODO move and change based on env
const wsURL = `${_wsURL}/ws?userID=${userID}`
const eventLogUrl = `${apiURL}/log?userID=${userID}`

type FailedBeacon = {
  type: "Beacon failure"
  time: number
  url: string
  data: FEEvent // TODO
}

/**
 *
 * @param {string} data
 */
const sendEvent = debouncePerArg(10)((data: FEEvent) => {
  const queued = navigator.sendBeacon(eventLogUrl, data)
  if (!queued) {
    /**
     * @type {Array}
     */
    const failedBeacons: FailedBeacon[] = JSON.parse(
      localStorage.getItem("failed-beacons") ?? "[]",
    )

    localStorage.setItem(
      "failed-beacons",
      JSON.stringify(
        failedBeacons.concat({
          type: "Beacon failure",
          time: Date.now(),
          url: eventLogUrl,
          data,
        }),
      ),
    )
  }
})

const sendFailedBeacons = async () => {
  await Promise.all(
    JSON.parse(localStorage.getItem("failed-beacons") ?? "[]").map(
      (
        beaconFailure: string, // ?string?
      ) =>
        fetch(eventLogUrl, {
          method: "POST",
          body: beaconFailure,
        }),
    ),
  )
  localStorage.setItem("failed-beacons", "[]")
}

const openWS = () => {
  const ws = new WebSocket(wsURL)
  let interval: number | null = null
  ws.onopen = () => {
    interval = setInterval(() => {
      ws.send("")
    }, pingInterval) as any
  }

  const handleClose = () => {
    if (interval !== null) {
      clearInterval(interval)
    }
    openWS()
  }

  ws.onclose = handleClose
  ws.onerror = console.warn
}

openWS()

// ? for when tab is minimized / maximized / opened / gracefully closed

document.addEventListener("visibilitychange", () => {
  sendEvent(
    document.visibilityState === "visible"
      ? FEEvents.pageVisible
      : FEEvents.pageHide,
  )
})

// ? For when app is not focused
window.addEventListener("blur", () => {
  sendEvent(FEEvents.windowBlur)
})

window.addEventListener("focus", () => {
  sendEvent(FEEvents.windowFocus)
})

// TODO add beforeUnload?
window.addEventListener("unload", () => {
  sendEvent(FEEvents.windowUnload)
})

// could it be visible, but not focused?
sendEvent(
  document.visibilityState === "visible"
    ? FEEvents.initVisible
    : FEEvents.initHidden,
)
sendFailedBeacons()
