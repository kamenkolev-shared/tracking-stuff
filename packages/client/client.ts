import { FEEvents, pingInterval } from "../shared/index.js"
import { userID } from "./shared.js"
import { wsURL, apiURL } from "./shared"
import {  PageState, tracker } from "../activity-tracker/main"

// +?userID=${userID}
// TODO move and change based on env
const websocketURL = `${wsURL}?userID=${userID}`
const logURL = `${apiURL}log?userID=${userID}`

type FailedBeacon = {
  type: "Beacon failure"
  time: number
  url: string
  data: PageState // TODO
}

/**
 *
 * @param {string} data
 */
const sendEvent = (data: PageState) => {
  const queued = navigator.sendBeacon(logURL, data)
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
          url: logURL,
          data,
        }),
      ),
    )
  }
}

const sendFailedBeacons = async () => {
  await Promise.all(
    JSON.parse(localStorage.getItem("failed-beacons") ?? "[]").map(
      (
        beaconFailure: string, // ?string?
      ) =>
        fetch(logURL, {
          method: "POST",
          body: beaconFailure,
        }),
    ),
  )
  localStorage.setItem("failed-beacons", "[]")
}

const openWS = () => {
  const ws = new WebSocket(websocketURL)
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

tracker.addEventListener(e => {
  sendEvent(e.newState)
})
openWS()

// ? for when tab is minimized / maximized / opened / gracefully closed
sendFailedBeacons()
