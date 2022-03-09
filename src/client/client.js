import { baseURL, userID } from "./shared.js"

const wsURL = `wss://${baseURL}/ws?userID=${userID}`
const eventLogUrl = `https://${baseURL}/log?userID=${userID}`
const events = {
  initVisible: "APP INIT & VISIBLE",
  initHidden: "APP INIT & HIDDEN",

  pageHide: "PAGE HIDDEN",
  pageVisible: "PAGE VISIBLE",
  windowBlur: "WINDOW BLURRED",
  windowFocus: "WINDOW FOCUSED",

  windowUnload: "PAGE UNLOADING", // ? useless?
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
  navigator.sendBeacon(
    eventLogUrl,
    document.visibilityState === "visible"
      ? events.pageVisible
      : events.pageHide,
  )
})

// ? For when app is not focused
window.addEventListener("blur", _e => {
  navigator.sendBeacon(eventLogUrl, events.windowBlur)
})

window.addEventListener("focus", _e => {
  navigator.sendBeacon(eventLogUrl, events.windowFocus)
})

window.addEventListener("unload", _e => {
  navigator.sendBeacon(eventLogUrl, events.windowUnload)
})

// could it be visible, but not focused?
navigator.sendBeacon(
  eventLogUrl,
  document.visibilityState === "visible" ? events.initVisible : events.initHidden,
)
