import { events, pingInterval } from "../shared/index.js"
import { baseURL, userID } from "./shared.js"
import { debouncePerArg } from "./utils.js"
import { event } from "../shared/index"

type FailedBeacon = {
  type: "Beacon failure"
  time: number
  url: string
  data: event // TODO
}

/**
 *
 * @param {string} data
 */
const sendEvent = debouncePerArg(10)((data: event) => {
  const queued = navigator.sendBeacon(eventLogUrl, data)
  if (!queued) {
    /**
     * @type {Array}
     */
    const failedBeacons = JSON.parse(
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
      (beaconFailure: string) => // ?string?
        fetch(eventLogUrl, {
          method: "POST",
          body: beaconFailure,
        }),
    ),
  )
  localStorage.setItem("failed-beacons", "[]")
}

// TODO move and change based on env
const wsURL = `wss://${baseURL}/ws?userID=${userID}`
const eventLogUrl = `https://${baseURL}/log?userID=${userID}`

const openWS = () => {
  const ws = new WebSocket(wsURL)
  let interval: number | null = null
  ws.onopen = () => {
    interval = setInterval(() => {
      ws.send("")
    }, pingInterval)
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
      ? events.pageVisible
      : events.pageHide,
  )
})

// ? For when app is not focused
window.addEventListener("blur", () => {
  sendEvent(events.windowBlur)
})

window.addEventListener("focus", () => {
  sendEvent(events.windowFocus)
})

window.addEventListener("unload", () => {
  sendEvent(events.windowUnload)
})

// could it be visible, but not focused?
sendEvent(
  document.visibilityState === "visible"
    ? events.initVisible
    : events.initHidden,
)
sendFailedBeacons()
