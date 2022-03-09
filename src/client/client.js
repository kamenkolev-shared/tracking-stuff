import { baseURL, userID } from "./shared.js"

/**
 *
 * @param {BodyInit} data
 */
const sendEvent = data => {
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
}
const sendFailedBeacons = async () => {
  await Promise.all(
    JSON.parse(localStorage.getItem("failed-beacons") ?? "[]").map(
      beaconFailure =>
        fetch(eventLogUrl, {
          method: "POST",
          body: beaconFailure,
        }),
    ),
  )
  localStorage.setItem('failed-beacons', '[]')
}

const wsURL = `wss://${baseURL}/ws?userID=${userID}`
const eventLogUrl = `https://${baseURL}/log?userID=${userID}`
const events = {
  initVisible: "APP_INIT & APP_VISIBLE",
  initHidden: "APP_INIT",

  pageHide: "APP_OBSCURED",
  pageVisible: "APP_VISIBLE",
  windowBlur: "APP_OBSCURED",
  windowFocus: "APP_VISIBLE",

  windowUnload: "APP_CLOSED", // ? useless?
}

const openWS = () => {
  const ws = new WebSocket(wsURL)
  let interval = null
  ws.onopen = () => {
    interval = setInterval(() => {
      ws.send("ping")
    }, 1000)
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
